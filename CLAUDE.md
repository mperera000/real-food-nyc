@AGENTS.md

# House Rules for Real Food NYC

You're the engineer. The user is the product manager. Follow these on every change.

## The goal (north star — trace features back to this)
Help the "Conscious Eater" find and support NYC restaurants that cook real food from
quality ingredients. The map is the heart. The honesty badges are the credibility.

## How to work
- Think first: before non-trivial code, say what you'll build and ask about anything unclear. Don't guess.
- Keep it simple: build the simplest thing that solves the problem. No extra features.
- Change only what was asked: don't rewrite unrelated code. If you spot something, mention it, don't do it.
- Aim at a checkable finish line, then show how each item checks out.

## How to write code
- Don't repeat yourself: one home for each piece of logic (one place for trust tiers, one for map setup).
- Same name everywhere: if it's a "spot," it's always a "spot."
- Handle the sad path: every failure shows a friendly message and a way out.
- Leave a trail: log important actions (what happened, worked or failed, any error).
- Keep layers apart: screens, logic, and data storage stay separate.
- Self-contained features: `src/features/map`, `src/features/lists`, `src/features/restaurants` each own their code.

## Definition of done (every change clears all of these)
- It works and didn't break anything that worked before.
- Build, linter, and formatter are green.
- It touched only what the task needed.
- It matches the project's names and patterns.

Working is the floor, not the bar.

## Look & feel
- Warm, hand-painted food-zine aesthetic. Cream background, serif display font (Fraunces), painterly
  veggie/farm art as a low-opacity backdrop (never fights text). Theme tokens live in `globals.css`.
