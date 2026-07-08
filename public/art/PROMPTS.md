# Painterly art kit — how to generate it

You need real painterly images to replace the simple SVG shapes in the backdrop
(and for a hero moment or two). Generate them in any AI image tool — ChatGPT /
DALL·E, Google ImageFX, Midjourney, or similar — then drop the files in this
`public/art/` folder with the filenames below.

Keep them soft and low-contrast so text stays readable on top.

---

## 1. Backdrop tile (the whole-site background)
**Filename:** `backdrop.png` (wide, ~1600x1200, soft, lots of cream space)

> A soft oil-painting still life of scattered farm vegetables and herbs —
> heirloom tomatoes, leafy greens, a carrot, a loaf of bread, a small farm barn —
> painted in warm pastel tones on a cream background, loose visible brushstrokes,
> impressionist, gentle, plenty of empty cream space, muted and calm, no text.

## 2. Hero image (top of the "Why ingredients matter" page, optional)
**Filename:** `hero.png` (wide, ~1600x900)

> A warm oil painting of a farmers-market table piled with fresh seasonal
> produce, painterly impasto brushstrokes, sage green and tomato red and butter
> yellow tones on cream, cozy editorial food-magazine feel, no text, no people.

## 3. Optional accent motifs (small, for cards or empty states)
**Filenames:** `tomato.png`, `greens.png`, `bread.png` (square, ~600x600, transparent or cream bg)

> A single [tomato / bunch of herbs / rustic loaf of bread], soft oil-painting
> style, warm pastel palette, loose brushstrokes, cream background, centered,
> no text.

---

## How to use them once generated
- Drop the files into this `public/art/` folder.
- Tell your AI: "Use `/art/backdrop.png` as the site background in VeggieBackdrop,
  keep it low-opacity so text stays readable, and fall back to the SVGs if the
  image is missing."
- For the hero: "Add `/art/hero.png` as a banner at the top of the /why page."

Keep every image soft and muted. If the art fights the text, lower its opacity.
