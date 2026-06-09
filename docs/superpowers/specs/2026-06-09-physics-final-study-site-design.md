# Physics Final Study Site — Design Spec

**Date:** 2026-06-09
**Course:** PHYS102 / PHYS104 — General Physics II (Electricity & Magnetism), OSTİM Technical University
**Source material:** Midterm exam images (`/home/a17/Downloads/phy`) + course playlist ("Physics 102 — فيزياء الكهرباء والمغناطيسية").

## Goal

A self-contained study website covering the **complete** Physics II (E&M) final-exam syllabus, taught thoroughly enough that a student who works through every page can score 100. Comprehensive theory, worked numeric examples, and practice problems for every topic.

## Non-Goals (YAGNI)

- No login, accounts, or backend.
- No auto-grading quiz engine (practice uses static show/hide solution toggles).
- No video embedding.
- No build tooling (no npm/bundler). Pure static files openable directly in a browser.
- Course ends at Inductance — AC circuits / Maxwell / EM waves are **out of scope** (confirmed with user).

## Architecture

Static site, zero build step. Plain HTML + one shared CSS + one shared JS. Math rendered with **KaTeX vendored locally** (works offline). Diagrams are inline SVG (no external image dependencies). Opens by double-clicking `index.html`; also hostable on any static host.

```
physics-final/
  index.html              ← home: hero, unit overview cards, master formula sheet, exam-day strategy
  topics/
    01-coulombs-law.html
    02-electric-field.html
    03-gauss-law.html
    04-electric-potential.html
    05-capacitance.html
    06-current-resistance.html
    07-dc-circuits.html
    08-magnetic-force.html
    09-magnetic-field-sources.html
    10-induction.html
    11-inductance.html
  assets/
    style.css             ← shared clean academic light theme + responsive sidebar
    app.js                ← sidebar active-state, mobile menu, solution show/hide toggles
    katex/                ← vendored KaTeX (katex.min.css, katex.min.js, fonts/) for offline math
  docs/superpowers/specs/ ← this spec
```

## Page Template (every topic page identical structure)

1. **Concept** — the physics from first principles: what it is, why it's true, physical intuition, sign conventions, common pitfalls.
2. **Key Formulas** — every equation used, each symbol defined with units. Rendered with KaTeX.
3. **Worked Example(s)** — fully solved numeric problems with all steps shown and final answers boxed. The 5 midterm questions appear as worked examples in their matching topics (both booklet A and B numbers).
4. **Practice Problems** — 2–4 extra problems per topic, each with a hidden "Show solution" toggle (button reveals full step-by-step solution).

Consistent layout shell on every page: top bar (site title + unit progress), left sidebar (units → topics, current topic highlighted), main content column with a max readable width.

## Topic Map (Units → Topics)

**Unit 1 — Electrostatics**
1. Electric Charge & Coulomb's Law — force (vector form), superposition. *(midterm Q1: +5Q/+4Q and −Q)*
2. The Electric Field — point charges, superposition, continuous distributions, field lines.
3. Gauss's Law & Conductors — flux, symmetry (sphere/line/sheet), conductors & induced charge. *(midterm Q2)*
4. Electric Potential & Potential Energy — V and U, plates, V↔E relation, eV unit. *(midterm Q3: parallel plates + proton)*
5. Capacitance & Dielectrics — series/parallel, energy, dielectrics. *(midterm Q4: 3-capacitor network)*

**Unit 2 — Circuits**
6. Current, Resistance & Resistivity — current, drift, Ohm's law, power, electron counting. *(midterm Q5)*
7. DC Circuits — EMF & internal resistance, Kirchhoff's laws, series/parallel resistors, RC charging/discharging.

**Unit 3 — Magnetism**
8. Magnetic Field & Magnetic Force — F = qv×B, motion of charges, force on current-carrying wires, torque on loops.
9. Sources of Magnetic Field — Biot–Savart law, field of wire/loop/solenoid, Ampère's law.

**Unit 4 — Induction**
10. Electromagnetic Induction — magnetic flux, Faraday's law, Lenz's law, motional EMF.
11. Inductance — self/mutual inductance, RL circuits, LC oscillation, energy stored in magnetic field.

Home page also includes: **master formula sheet** (all units, grouped), **per-unit overviews**, and an **exam-day strategy** section (problem-solving checklist, unit conventions, common mistakes).

## Correctness Requirement

A study site with a wrong answer is worse than none. Every worked example and every practice solution must be numerically and conceptually verified. The five midterm problems are solved for **both** booklet A and booklet B value sets. Constants used consistently: k = 8.99×10⁹ N·m²/C², ε₀ = 8.85×10⁻¹² C²/(N·m²), e = 1.6×10⁻¹⁹ C, μ₀ = 4π×10⁻⁷ T·m/A.

## Styling

Clean modern academic, light theme. Crisp serif/sans pairing for readability, generous line spacing, boxed final answers, color-coded callouts (concept / formula / example / pitfall). Responsive: sidebar collapses to a menu on mobile. Print-friendly (so pages can be printed as a study packet).

## Testing / Verification

- Every page opens with no console errors; KaTeX renders all equations (offline check with network disabled).
- Sidebar navigation links resolve; active topic highlights correctly.
- All "Show solution" toggles work.
- Spot-check numeric answers against independent recomputation.
- Responsive check at mobile and desktop widths.

## Delivery

All files under `/home/a17/physics-final/`. User opens `index.html` in a browser. Committed to a local git repo.
