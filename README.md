# Physics II Final — Electricity & Magnetism Study Site

A complete, self-contained study website for the **General Physics II (Electricity & Magnetism)** final exam (PHYS102 / PHYS104, OSTİM Technical University). Every topic is taught from first principles, with fully worked examples and practice problems. Work through it all and the exam holds no surprises.

## What's inside

11 topics across 4 units, each page following the same rhythm — **Concept → Key Formulas → Worked Examples → Practice (with show/hide solutions)**:

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

The home page also has a **master formula sheet** and an **exam-day strategy** section. The five midterm questions appear as verified worked examples in their matching topics, solved for both booklet A and booklet B value sets.

## How to use it

Just open **`index.html`** in any browser — no build step, no server, no internet required. Math is rendered with [KaTeX](https://katex.org/), vendored locally in `assets/katex/` so it works fully offline.

To host it (e.g. GitHub Pages), serve the folder as static files; the entry point is `index.html`.

## Project layout

```
index.html              Home: overview, formula sheet, exam-day strategy
topics/                 One page per topic (01–11)
assets/style.css        Shared theme
assets/app.js           Sidebar nav, prev/next, solution toggles, math rendering
assets/katex/           Vendored KaTeX (offline math)
docs/superpowers/specs/ Design spec
```

## Constants used

`k = 8.99×10⁹ N·m²/C²` · `ε₀ = 8.85×10⁻¹² C²/(N·m²)` · `e = 1.6×10⁻¹⁹ C` · `μ₀ = 4π×10⁻⁷ T·m/A` · `1 eV = 1.6×10⁻¹⁹ J`
