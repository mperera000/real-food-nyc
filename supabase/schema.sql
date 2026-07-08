-- Real Food NYC — database setup
-- Paste this whole file into Supabase → SQL Editor → New query → Run.
-- It creates the restaurants table, lets the public read it, and adds a few real seed spots.

-- 1. The table: one row per restaurant.
create table if not exists restaurants (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  neighborhood  text,
  borough       text,
  latitude      double precision,   -- approximate for seeds; verify during curation
  longitude     double precision,
  address       text,
  trust_tier    text not null check (trust_tier in ('certified', 'names_farms', 'scratch')),
  evidence_note text,               -- the honest "how we know" line
  source_url    text,               -- where the claim can be checked
  farms         text[],             -- named suppliers, when they list them
  tags          text[],
  website       text,
  price_range   text,
  cuisine       text,
  status        text not null default 'live',
  created_at    timestamptz not null default now()
);

-- 2. Security: anyone may READ live spots (the map is public, no login in V1).
--    Nobody can write from the browser — you add spots from the dashboard.
alter table restaurants enable row level security;

drop policy if exists "public can read live restaurants" on restaurants;
create policy "public can read live restaurants"
  on restaurants for select
  using (status = 'live');

-- Grant the underlying read right to the public + logged-in roles.
grant select on table restaurants to anon, authenticated;

-- 3. Seed spots (real NYC places; coordinates are APPROXIMATE — verify later).
insert into restaurants (name, neighborhood, borough, latitude, longitude, trust_tier, evidence_note, source_url, farms) values
  ('GustOrganics', 'Flatiron', 'Manhattan', 40.7379, -73.9950, 'certified',
   'First USDA-certified organic restaurant in NYC; 100% certified organic ingredients.',
   'https://www.liveabout.com/gustorganics-restaurant-4061881', null),

  ('Blue Hill', 'West Village', 'Manhattan', 40.7318, -74.0004, 'names_farms',
   'Chef Dan Barber works directly with local farms and partners.',
   'https://www.bluehillfarm.com/', array['Halloran Farm','Samascott Orchards']),

  ('ABC Kitchen', 'Flatiron', 'Manhattan', 40.7379, -73.9897, 'names_farms',
   'Focus on local, sustainable, organic seasonal produce from named farms.',
   'https://www.abchome.com/dine/abc-kitchen/', array['Norwich Meadows Farm','Eckerton Hill Farm','Bodhi Tree Farm']),

  ('Clay', 'Harlem', 'Manhattan', 40.8090, -73.9530, 'names_farms',
   'Sources all meat, fish and produce from small, named local suppliers.',
   'https://www.clayharlem.com/', array['Battenkill Valley Creamery','Finger Lakes Farm','Byrne Hollow Farm']),

  ('The Organic Grill', 'East Village', 'Manhattan', 40.7296, -73.9999, 'scratch',
   'Minimally processed dishes made from scratch with locally grown produce.',
   'https://www.theorganicgrill.com/', null);
