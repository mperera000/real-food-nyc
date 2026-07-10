-- Real Food NYC - Long Island spots (North Fork + Hamptons)
-- Paste into Supabase - SQL Editor - New query - Run. (One-time add.)
--
-- IMPORTANT: research candidates from public farm-to-table listings.
--   - Coordinates are APPROXIMATE (verify before relying on the map pin).
--   - Confirm each tier/claim against the restaurant's own site before treating it as verified.

insert into restaurants (name, neighborhood, borough, latitude, longitude, trust_tier, evidence_note, source_url, farms) values
  ('North Fork Table & Inn', 'Southold', 'Suffolk County', 41.0645, -72.4270, 'scratch',
   'Seasonal menus built with ingredients from nearby North Fork farms; chef works directly with local growers.',
   'https://www.northforktableandinn.com/', null),

  ('Chef Noah''s', 'Greenport', 'Suffolk County', 41.1035, -72.3625, 'names_farms',
   'Names its local farm, vineyard, and fishing partners on its menu and site.',
   'https://www.chefnoahs.com/', array['Satur Farms','Orient Organics','Crescent Duck Farm']),

  ('The Frisky Oyster', 'Greenport', 'Suffolk County', 41.1030, -72.3610, 'scratch',
   'Creative seafood with locally sourced, seasonal produce.',
   'https://lovelocallongisland.com/best-farm-to-table-long-island-restaurants-and-local-dining-guide-for-2026/', null),

  ('The Shoals', 'Aquebogue', 'Suffolk County', 40.9445, -72.6270, 'scratch',
   'North Fork kitchen cooking around the local market and farm bounty.',
   'https://www.theshoalsnorthfork.com/', null),

  ('Nick & Toni''s', 'East Hampton', 'Suffolk County', 40.9645, -72.1840, 'scratch',
   'Garden-to-table cooking with produce from its own garden and local East End farms.',
   'https://www.elliman.com/insider/long-island-locavore-farm-to-table-dining-in-the-hamptons-and-north-fork', null);
