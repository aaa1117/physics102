# Design — Solved Final Exam page + 10-per-topic practice banks

**Date:** 2026-06-24
**Status:** Approved (brainstorming)
**Repo:** github.com/aaa1117/physics102 → https://aaa1117.github.io/physics102/

## Goal

Two upgrades to the existing static study site, plus a clarity pass so the site is
dramatically easier to understand:

1. **Solved Final Exam page** — the 20 real questions from the PHYS102 Final
   (EN-A, 15 May 2026), each cleanly re-typed with KaTeX + a redrawn SVG figure
   where the original had one, a plain-language "what's really going on" note,
   the four A–D choices, a reveal-on-demand step-by-step solution that ends on
   the correct choice, and a collapsible link to the original scan.
2. **Practice banks** — build every one of the 11 topic pages out to **10
   medium-difficulty, exam-common practice questions**, each with a reveal-on-
   demand numbered solution and a one-line *why this approach* note.

Constraint preserved: **zero dependencies, no build step.** Plain HTML + the
existing vendored KaTeX. Must keep working offline and on GitHub Pages.

## Non-goals (YAGNI)

- No site-wide search, no framework, no JS bundler.
- No accounts / progress persistence beyond what localStorage trivially allows
  (out of scope unless cheap).
- Heavy SVG + intuition treatment is reserved for the **Final Exam** questions
  and topic **concept** sections; the 110 practice questions get clean steps +
  a one-liner, with an SVG only where the problem is unreadable without one.

## Architecture (follows existing patterns)

- **`assets/app.js`** is the single source of truth for nav. Add a trailing
  pseudo-unit `Final Exam` containing one entry, and make the exam page the last
  node in the flat prev/next chain (Inductance → Final Exam). Topic nav entries
  unchanged.
- **`topics/final-exam.html`** — new page, same chrome as topic pages
  (`data-root="../"`, `data-topic="final-exam"`).
- **`topics/01..11-*.html`** — expand each `<h2>Practice</h2>` section to 10
  `.practice` blocks. Existing concept/formula/worked-example sections stay;
  light edits only where they sharpen understanding.
- **`index.html`** — add a prominent "Final Exam — fully solved" CTA card near
  the top, and bump the hero chips to reflect the new question count.
- **`assets/style.css`** — additive only. New: `.choices`/`.choice`/`.choice.correct`
  for answer lists, `.figure`/SVG sizing, `.callout.intuition`, the
  `details.original` photo block, the exam-page `.qjump` grid, and a
  `.reveal-all` master toggle button.
- **`assets/exam/`** — the 6 unique exam scans (2 of the 7 source files are
  byte-identical), named by question range, referenced from the `<details>`.

## Components

### Practice question (×110)
```html
<div class="practice"><div class="q">
  <p><span class="qno">Practice N</span></p>
  <p>… question, KaTeX math …</p>
  <button class="solution-toggle">Show solution</button>
  <div class="solution">
    <div class="step">…</div> …
    <span class="answer"><span class="a-label">Answer</span>…</span>
    <p class="why"><b>Why:</b> one-line approach cue.</p>
  </div>
</div></div>
```

### Exam question (×20)
```html
<article class="exam-q" id="qN">
  <div class="eq-head">Q N · <a href="NN-topic.html">Topic</a></div>
  <p>… re-typed question …</p>
  <div class="figure">… inline SVG …</div>            <!-- if original had one -->
  <div class="callout intuition"><p class="c-head">What's really going on</p>…</div>
  <ol class="choices" type="A"><li class="choice">…</li>…</ol>
  <button class="solution-toggle">Show solution</button>
  <div class="solution">… steps … <span class="answer">…(✔ choice X)</span></div>
  <details class="original"><summary>View original exam photo</summary><img …></details>
</article>
```

## Verified answer key (Final Exam, EN-A)

| Q | Topic | Ans | Q | Topic | Ans |
|---|-------|-----|---|-------|-----|
| 1 | drift velocity vs area | **C** doubles | 11 | flux BAcosθ | **B** 0.4 Wb |
| 2 | current density J | **A** 4.2×10⁵ | 12 | velocity selector E/v | **A** 0.20 T |
| 3 | R from V–I slope | **C** 5.0 Ω | 13 | B of long wire | **B** 4.0×10⁻⁵ T |
| 4 | resistivity from P | **A** 1.2×10⁻⁶ | 14 | parallel wires force | **A** attract |
| 5 | 3 resistors ∥ | **A** 2.0 Ω | 15 | Biot–Savart dl×r̂ | **A** dl & r |
| 6 | RC **fully charged** | **B** I=0, V_C=ε | 16 | solenoid I | **B** 1.25 A |
| 7 | opposing emfs | **A** 1.0 A | 17 | Lenz direction | **B** opposite |
| 8 | τ=RC → R | **A** 2.0×10³ Ω | 18 | motional emf BLv | **B** 4.0 V |
| 9 | F on electron RHR | **A** +y | 19 | emf from Φ–t slope | **B** 0.20 V |
| 10| proton radius mv/qB | **B** 0.063 m | 20 | induced current | **B** 0.012 A |

*Q12 numeric givens (E, v) to be re-confirmed against the scan during build; B=E/v=0.20 T fits choice A.*

## Practice-bank blueprint (10 common, medium types per topic)

**01 Coulomb's Law:** (1) F between two charges; (2) solve for r given F;
(3) scaling ratio of F; (4) net force, 3 charges in a line; (5) net force,
triangle (2D); (6) equilibrium point where net F=0; (7) identical spheres touch
& share charge; (8) electric vs gravitational force ratio; (9) solve for q given
F,r; (10) direction of net force (sign reasoning).

**02 Electric Field:** (1) E of a point charge; (2) F=qE incl. negative charge
direction; (3) net E from two charges on a line; (4) E midway between two charges;
(5) point where E=0 between like charges; (6) E on perpendicular bisector / dipole;
(7) field-line / direction concept; (8) acceleration a=qE/m; (9) electron deflected
between plates (kinematics); (10) solve for q given E.

**03 Gauss's Law:** (1) Φ=q/ε₀ through closed surface; (2) flux through one cube
face (q/6ε₀); (3) E outside a charged sphere; (4) E of infinite line λ; (5) E of
infinite sheet σ/2ε₀; (6) field just outside a conductor σ/ε₀; (7) charged
conducting sphere inside vs outside; (8) net flux, mixed inside/outside charges;
(9) flux through open surface in uniform field; (10) cavity/shell induced charge.

**04 Electric Potential:** (1) V of a point charge; (2) U of two charges / work to
assemble; (3) net V from several charges; (4) W=qΔV between points; (5) E=V/d for
plates; (6) speed from qV=½mv² (electron gun); (7) energy in eV; (8) V at centre of
a square of charges; (9) U of a 3-charge configuration; (10) V constant inside a
conductor / sign of ΔU.

**05 Capacitance:** (1) C=ε₀A/d; (2) Q=CV; (3) U=½CV²; (4) series C_eq; (5) parallel
C_eq; (6) mixed network C_eq; (7) dielectric κ effect; (8) effect of changing d or A;
(9) charge/voltage split (series same Q, parallel same V); (10) energy change moving
plates at constant Q vs V.

**06 Current & Resistance:** (1) I=ΔQ/Δt / electron count; (2) J=I/A; (3) drift
velocity vs area [Final Q1]; (4) R=ρL/A; (5) V=IR; (6) R from V–I slope [Final Q3];
(7) power P=I²R=V²/R; (8) resistivity from R,L,A [Final Q4]; (9) effect of doubling
L or A on R; (10) energy/heat = Pt.

**07 DC Circuits:** (1) series R_eq & I; (2) parallel R_eq [Final Q5]; (3) series–
parallel total current; (4) terminal voltage with internal r; (5) opposing/aiding
emfs loop [Final Q7]; (6) Kirchhoff loop unknown; (7) power in a circuit; (8) τ=RC
find R/C [Final Q8]; (9) charge/voltage at t=τ or 5τ; (10) capacitor at t=0 vs
steady state [Final Q6].

**08 Magnetic Force:** (1) F=qvBsinθ magnitude; (2) RHR force direction on a charge
[Final Q9]; (3) radius r=mv/qB [Final Q10]; (4) cyclotron period T=2πm/qB;
(5) velocity selector E=vB [Final Q12]; (6) force on a wire F=BILsinθ; (7) RHR force
on a wire; (8) torque on a loop τ=NIABsinθ; (9) magnetic force does no work / speed
constant; (10) KE / radius combination.

**09 Sources of B:** (1) B=μ₀I/2πr long wire [Final Q13]; (2) RHR direction around a
wire; (3) B at loop centre μ₀I/2R; (4) N-turn coil μ₀NI/2R; (5) solenoid μ₀nI
[Final Q16]; (6) force between parallel wires [Final Q14]; (7) Ampère enclosed
current; (8) Biot–Savart dl×r̂ concept [Final Q15]; (9) net B between two wires;
(10) toroid B inside.

**10 Induction:** (1) Φ=BAcosθ [Final Q11]; (2) motional emf BLv [Final Q18];
(3) emf from Φ–t slope [Final Q19]; (4) emf from dB/dt; (5) induced current I=ε/R
[Final Q20]; (6) Lenz direction [Final Q17]; (7) rotating loop peak emf NBAω;
(8) flux change from changing area; (9) emf from changing angle; (10) power to move
a rod P=ε²/R.

**11 Inductance:** (1) ε=-L dI/dt; (2) U=½LI²; (3) solenoid L=μ₀N²A/l; (4) RL
τ=L/R; (5) RL current at t=τ / final I; (6) mutual inductance emf; (7) LC ω=1/√(LC);
(8) LC energy exchange; (9) solve for L given ε and dI/dt; (10) inductor at t=0
(open) vs steady state (wire).

## Data flow / behaviour

- KaTeX auto-render runs site-wide on load (unchanged). All new math uses `$…$`.
- `.solution-toggle` reuse: existing JS already wires every toggle on the page —
  no JS change needed for practice/exam solutions.
- New JS (small, in app.js): on the exam page only, build the Q-jump grid from
  `.exam-q[id]` and wire a "Reveal/Hide all solutions" button. Guarded by
  `data-topic="final-exam"` so other pages are untouched.

## Testing / verification

- `grep` every `topics/*.html` for exactly 10 `Practice` blocks; exam page for 20
  `exam-q`.
- Spot-check ~2 questions per topic by re-deriving the numbers.
- Open `index.html` and `topics/final-exam.html` in a headless browser; assert no
  KaTeX `.katex-error`, all `assets/exam/*` images resolve, sidebar shows the
  Final Exam entry, toggles open/close.
- Confirm no broken relative links (topic cross-links from exam page).

## Rollout

Commit in logical chunks (assets+CSS+nav, then exam page, then topics in batches,
then home + verification), then push to `origin/main`; GitHub Pages redeploys.
