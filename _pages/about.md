---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
I am a physics student at **Zhejiang University**, Hangzhou, China. Currently in my third year, I work on theoretical and computational condensed matter physics, with a focus on nonlinear transport and dissipation-induced response in quantum materials. I am a summer research visitor at the **National University of Singapore**.

## News

- **Aug 2026** — Drove the *Keldysh4ai* program (Keldysh/NEGF physics-informed AI) past its 560th independently reviewed task closure; wrote the current-stage scientific closeout for the E10 campaign
- **Aug 2026** — Froze the exact finite-Γ compactification of the DC nonlinear response: an analytic one-thermal-master form with nine pointwise-exact minimal generators (channel hierarchy 9 → 3 → 1)
- **Aug 2026** — Brought the GNPNN program to two-paper readiness: interactive research atlas over 9 campaigns / 33 frozen experiments, independent prior-art audit, and a submission-ready methodology manuscript
- **Aug 2026** — Released two open-source frameworks: [symbolic-compactification](https://github.com/DarrenWongKaWa/symbolic-compactification) (agent-native exact symbolic compaction, zero-residual promotion) and [repo-native-symbolic-science](https://github.com/DarrenWongKaWa/repo-native-symbolic-science) (auditable human-agent symbolic science)
- **Aug 2026** — Published the first research note on this site: [Opening the Neural Network to a Physicist](/research/opening-the-neural-network-to-a-physicist/)

## Education

**Zhejiang University** | Hangzhou, China
*B.Sc. in Physics*, School of Physics | Sept. 2023 -- Present

- **Expected Graduation:** June 2027
- **GPA:** 3.69 / 4.3; **Major GPA:** 3.97 / 4.3
- **Selected Courses:** Quantum Mechanics, Thermodynamics and Statistical Physics (96), Electrodynamics (94), Solid State Physics (93), Topics in Theoretical Physics (91), Asymptotic Methods and Perturbation Theory, Computational Physics

## Research Experience

**GNPNN: Geometry-Native Physical Neural Networks**
*Physics-for-AI Research Program* | Aug. 2026 -- Present

- Investigates whether neural latent states typed as sections of symmetry- and gauge-structured fiber bundles, with connection-based message passing, provide more compact, transferable, and interpretable representations than generic hidden-vector features
- Designed and ran a controlled U(1)/SO(2) graph benchmark: 2³ factorial architecture experiment (192 scheduled configurations, 168 trained, 0 failed), decomposing the architecture into fixed typed transport (A), learned covariant connection refinement (B), and holonomy memory (C)
- Led an adversarial audit that identified five critical defects (registry collisions, inconsistent loss semantics, angular metric errors, factor leakage, incomplete run provenance); all remediated and independently validated from a clean checkout
- Established the narrow supported result that fixed typed transport substantially improves the T1 benchmark (M100 test loss 0.0686 ± 0.0350, Factor A main effect +0.9085), while falsifying prior claims (best-model, A×C interaction, T5 curvature-memory)
- Built the reproducibility stack: content-addressed run ledgers, round registry, claim-lineage tracking, and round verification scripts (`verify_round.py`, `verify_all_rounds.py`)
- Assembled the interactive research atlas covering the full frozen evidence chain (9 campaigns, 33 experiments, 50-node OPHIS reasoning graph) and unified it with the manuscript branch
- Ran an independent prior-art audit against the 2024--2026 equivariance literature and hardened the methodology manuscript accordingly (admissibility / representability / attainability with exact witnesses); two-paper submission plan prepared for advisor review

**Keldysh4ai: Keldysh/NEGF Physics-for-AI Program**
*Physics-for-AI Research Program* | Aug. 2026 -- Present

- Develops predictive models as **differentiable physical solvers with learnable closures**: a physical residual contract R(z\*, x, C_θ) = 0 with a theory-defined readout; known operator relations and the solve stay fixed, and only typed unknown operators are trainable
- Ran the E10 campaign --- explicit Γ(E) and Σ objects under a fixed NEGF grammar, with causal memory, white-box theory-level interventions, and transfer/error diagnostics; synthesized the stage closeout and claim-evidence matrix (OPHIS-9)
- Maintained the evidence-first protocol end-to-end: preregistration, immutable artifacts, and an audited task pipeline advanced past 560 sequential closures with independent review on each merge

**Dissipation-Induced Nonreciprocal Current**
*Research Project* --- Collaborators: Zhichao Guo, Prof. Hua Wang | Apr. 2026 -- Present

- Completed the analytic and computational derivation of the projected response σ_xxx as the first concrete case toward the general σ_abc formulation; results are being organized toward a manuscript
- Investigated dissipation-induced nonreciprocal current in time-reversal-symmetric and inversion-broken systems, aiming toward a general tensorial nonlinear-conductivity framework for σ_abc
- Developed consistency checks for the DC limit, relaxation-rate dependence, band-index decomposition, and multiband response kernels
- Verified the crossover between low-temperature insulating O(Γ²) behavior and high-temperature or metallic O(Γ) behavior in representative model calculations
- Froze the **exact finite-Γ compactification** of the DC σ response: an analytic one-thermal-master form with nine pointwise-exact minimal geometric generators; under time-reversal symmetry and the full Brillouin zone, nine channels reduce to three, and at leading weak Γ a single channel yields the Γ⁻¹ nonreciprocal coefficient --- the full hierarchy replayable end-to-end from a clean checkout via Wolfram scripts

**Symbolic Normal-Form Reduction for Nonlinear Conductivity**
*Independent Repository Project* --- Originated from the σ_xxx nonlinear-response calculation | Jun. 2026 -- Present

- Independently proposed and developed a symbolic simplification workflow to organize large nonlinear-conductivity expressions into canonical algebraic sectors
- Built a repo-native verification framework for pair-sector basis construction, including row-level coverage checks, family/orbit classification, residual-channel policies, and human-gated promotion criteria
- Identified loop-type algebraic structures, including three-band products such as A_ab A_bc A_ca, and organized them into reproducible normal forms
- Used Mathematica/Wolfram Language, Python, and Git-based artifact tracking for symbolic parsing, invariant matching, verification logs, and consistency checks

**Electronic Instabilities in Zigzag Black Phosphorus Nanoribbons**
*Independent Research Project* --- Advisor: Prof. Yunhao Lu | Dec. 2025 -- Jan. 2026

- Verified that lattice reconstruction drives the system toward a non-magnetic ground state, opening a bandgap of ≈ 11.6 meV
- Investigated the competition between Stoner instability and Peierls instability using first-principles calculations (VASP)
- Analyzed band structures and Projected Density of States (PDOS) to identify edge-localized states

**Spontaneous Polarization in Wurtzite AlN**
*Independent Research Project* --- Advisor: Prof. Yunhao Lu | Mar. -- May 2025

- Computed the spontaneous polarization difference relative to the centrosymmetric reference structure, obtaining 1.32 C/m² with <0.22% error
- Performed convergence tests on plane-wave cutoff energy and k-point sampling for first-principles polarization calculations

**Non-linear Dynamics and Chaos in Magnetic Pendulum Systems**
*Co-Researcher* --- Advisor: Prof. Zhouyang Wang | Late 2024

- Validated the "Butterfly Effect" in magnetic pendulum systems and analyzed the transition from chaotic to periodic motion
- Modeled the dynamics of a pendulum under non-linear magnetic potentials using Lagrangian mechanics

## Skills

**Computational Physics:** First-principles calculations / DFT (VASP)

**Programming & Symbolic Tools:** Python, Mathematica/Wolfram Language, Linux/Unix Shell, Git, LaTeX, Origin

**Theoretical & Mathematical Physics:** Non-equilibrium transport; Differential geometry; Berry-phase physics; Asymptotic methods and perturbation theory; Group-theoretical methods

**Languages:** English (Working Proficiency), Mandarin (Native), Cantonese (Fluent)

## Honors & Awards

- **Bronze Medal**, 53rd International Physics Olympiad (IPhO) | 2023
- **Honorable Mention**, 23rd Asian Physics Olympiad (APhO) | 2023
- **Third-Class Scholarship**, Zhejiang University (Academic Excellence) | 2024

## Running

I am an avid long-distance runner. My personal bests:

- **Half Marathon:** 1:36:19

The King I followed is 1:24:58. But I will try to excel that soon.

## Contact

- **Email:** [kawawong@zju.edu.cn](mailto:kawawong@zju.edu.cn)
- **Phone:** (+86) 195-6410-9887
- **Location:** Hangzhou, China
