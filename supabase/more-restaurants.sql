-- Real Food NYC - more curated spots (NYC + NY State)
-- Paste this whole file into Supabase - SQL Editor - New query - Run. (One-time add.)
--
-- IMPORTANT: these are RESEARCH CANDIDATES pulled from public farm-to-table listings.
--   - Coordinates are APPROXIMATE (verify before relying on the map pin).
--   - The trust_tier is a best guess from what each place publicly claims. Confirm each
--     one (especially the 'certified' / USDA Organic badges) against the restaurant's own
--     site before treating it as verified. Edit or delete any that do not check out.

insert into restaurants (name, neighborhood, borough, latitude, longitude, trust_tier, evidence_note, source_url, farms) values
  -- New York City
  ('Le Botaniste', 'NoHo', 'Manhattan', 40.7268, -73.9950, 'certified',
   'Marketed as a certified 100% organic, plant-based kitchen with multiple NYC locations.',
   'https://www.lebotaniste.us/', null),

  ('Pure Ktch', 'Hell''s Kitchen', 'Manhattan', 40.7623, -73.9910, 'certified',
   'Advertises 100% organic ingredients, made fresh in-house daily.',
   'https://newyorkstreetfood.com/blog/healthy-organic-restaurants-nyc/', null),

  ('Friend of a Farmer', 'Gramercy', 'Manhattan', 40.7358, -73.9862, 'scratch',
   'Scratch cooking with long-standing farmer relationships; menu shaped by what is fresh.',
   'https://www.friendofafarmer.com/', null),

  ('The East Pole', 'Upper East Side', 'Manhattan', 40.7657, -73.9660, 'scratch',
   'Highlights local, seasonal, organic produce and sustainably sourced proteins.',
   'https://www.opentable.com/cuisine/best-farm-to-table-restaurants-new-york-ny', null),

  ('Market Table', 'West Village', 'Manhattan', 40.7305, -74.0030, 'scratch',
   'Neighborhood farm-to-table with a seasonal, minimally processed menu.',
   'https://www.opentable.com/features/best-organic-restaurants-new-york-ny', null),

  ('BLACKBARN', 'Flatiron', 'Manhattan', 40.7440, -73.9875, 'names_farms',
   'Sources meat, fish, produce, and dairy from local farms.',
   'https://flatironnomad.nyc/2025/03/18/certified-green-restaurants-in-flatiron-nomad/', null),

  -- New York State (Hudson Valley + Westchester)
  ('Blue Hill at Stone Barns', 'Pocantico Hills', 'Westchester', 41.1063, -73.8274, 'names_farms',
   'Menus built from the on-site Stone Barns farm and local purveyors.',
   'https://www.bluehillfarm.com/', array['Stone Barns Center farm']),

  ('Grazin''', 'Hudson', 'Columbia County', 42.2517, -73.7910, 'names_farms',
   'Sources from its own Grazin'' Angus Acres; described as the first Animal Welfare Approved restaurant.',
   'https://www.iloveny.com/blog/post/the-best-farm-to-table-dining-experiences-in-new-york-state/', array['Grazin'' Angus Acres']),

  ('Terrapin', 'Rhinebeck', 'Dutchess County', 41.9270, -73.9120, 'scratch',
   'Farm-to-table pioneer emphasizing locally sourced and organic ingredients.',
   'https://www.iloveny.com/blog/post/the-best-farm-to-table-dining-experiences-in-new-york-state/', null),

  ('Restaurant Manor Rock', 'Hudson', 'Columbia County', 42.2515, -73.7895, 'names_farms',
   'Grows an ever-changing harvest at its own Manor Rock Farm.',
   'https://hvmag.com/food/best-new-restaurants-hudson-valley/', array['Manor Rock Farm']),

  ('Aroma Thyme Bistro', 'Ellenville', 'Ulster County', 41.7178, -74.3958, 'scratch',
   'Green-certified bistro with an organic, locally sourced menu.',
   'https://www.aromathymebistro.com/', null),

  ('RiverMarket Bar & Kitchen', 'Tarrytown', 'Westchester', 41.0765, -73.8685, 'scratch',
   'Features organic farmers and producers from across the Hudson Valley.',
   'https://www.visitwestchesterny.com/food-drink/restaurants/farm-to-table/', null);
