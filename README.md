# Physics II Final — Electricity & Magnetism Study Site

A complete, self-contained study website for the **General Physics II (Electricity & Magnetism)** final exam (PHYS102 / PHYS104, OSTİM Technical University). Every topic is taught from first principles, with fully worked examples and practice problems. Work through it all and the exam holds no surprises.

## What's inside

11 topics across 4 units, each page following the same rhythm — **Concept → Key Formulas → Worked Examples → 10 Practice questions (with show/hide solutions)**:

**Unit 1 · Electrostatics**
1. Coulomb's Law
2. The Electric Field
3. Gauss's Law & Conductors
4. Electric Potential & Energy
5. Capacitance & Dielectrics

**Unit 2 · Circuits**
6. Current & Resistance
7. DC Circuits

**Unit 3 · Magnetism**
8. Magnetic Field & Force
9. Sources of Magnetic Field

**Unit 4 · Induction**
10. Electromagnetic Induction
11. Inductance

Every topic page now carries **ten exam-style practice questions** (medium difficulty, the kinds that actually show up), each with a numbered step-by-step solution and a one-line "why this approach" cue.

**★ The solved Final Exam.** `topics/final-exam.html` reproduces all **20 questions of the May 2026 final (booklet EN-A)** — each re-typed cleanly with a redrawn SVG figure, a plain-language "what's really going on" note, the four choices, a reveal-on-demand step-by-step solution that highlights the correct answer, and a collapsible link to the original scan. Every question links back to its topic page. There's a question-jump grid and a "reveal all" toggle at the top.

The home page also has a **master formula sheet** and an **exam-day strategy** section.

## How to use it

Just open **`index.html`** in any browser — no build step, no server, no internet required. Math is rendered with [KaTeX](https://katex.org/), vendored locally in `assets/katex/` so it works fully offline.

To host it (e.g. GitHub Pages), serve the folder as static files; the entry point is `index.html`.

## Project layout

```
index.html              Home: overview, formula sheet, exam-day strategy, final-exam CTA
topics/01–11-*.html     One page per topic, each with 10 practice questions
topics/final-exam.html  The 20-question May 2026 final, fully solved
assets/style.css        Shared theme
assets/app.js           Sidebar nav, prev/next, solution toggles, reveal-all, math rendering
assets/katex/           Vendored KaTeX (offline math)
assets/exam/            Original exam scans (q01-cover … q18-20), rotated upright
docs/superpowers/specs/ Design specs
```

## Constants used

`k = 8.99×10⁹ N·m²/C²` · `ε₀ = 8.85×10⁻¹² C²/(N·m²)` · `e = 1.6×10⁻¹⁹ C` · `μ₀ = 4π×10⁻⁷ T·m/A` · `1 eV = 1.6×10⁻¹⁹ J`
