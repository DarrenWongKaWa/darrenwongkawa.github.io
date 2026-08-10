---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

Education
======
* **Zhejiang University**, Hangzhou, China
  * B.Sc. in Physics, School of Physics | Sept. 2023 -- Present
  * Expected Graduation: June 2027
  * GPA: 3.69 / 4.3; Major GPA: 3.97 / 4.3

Research Experience
======
* **Research Project: Dissipation-Induced Nonreciprocal Current**
  * Collaborators: Zhichao Guo, Prof. Hua Wang | Apr. 2026 -- Present
  * Completed the analytic and computational derivation of the projected response σ_xxx as the first concrete case toward the general σ_abc formulation; results being organized toward a manuscript
  * Investigated dissipation-induced nonreciprocal current in time-reversal-symmetric and inversion-broken systems, aiming toward a general tensorial nonlinear-conductivity framework for σ_abc
  * Developed consistency checks for the DC limit, relaxation-rate dependence, band-index decomposition, and multiband response kernels
  * Verified the crossover between low-temperature insulating O(Γ²) behavior and high-temperature or metallic O(Γ) behavior in representative model calculations

* **Independent Repository Project: Symbolic Normal-Form Reduction for Nonlinear Conductivity**
  * Originated from the σ_xxx nonlinear-response calculation | Jun. 2026 -- Present
  * Independently proposed and developed a symbolic simplification workflow to organize large nonlinear-conductivity expressions into canonical algebraic sectors
  * Built a repo-native verification framework for pair-sector basis construction, including row-level coverage checks, family/orbit classification, residual-channel policies, and human-gated promotion criteria
  * Identified loop-type algebraic structures, including three-band products such as A_ab A_bc A_ca, and organized them into reproducible normal forms

* **Research Assistant**
  * Advisor: Prof. Yunhao Lu | Dec. 2025 -- Jan. 2026
  * Project: Electronic Instabilities in Zigzag Black Phosphorus Nanoribbons
  * Used VASP (DFT) for first-principles calculations; verified lattice-reconstruction-driven non-magnetic ground state with ~11.6 meV bandgap

* **Independent Research Project**
  * Advisor: Prof. Yunhao Lu | Mar. -- May 2025
  * Project: Spontaneous Polarization in Wurtzite AlN
  * Computed spontaneous polarization (1.32 C/m², <0.22% error) with first-principles calculations

* **Co-Researcher**
  * Advisor: Prof. Zhouyang Wang | Late 2024
  * Project: Non-linear Dynamics and Chaos in Magnetic Pendulum Systems

Skills
======
* **Computational Physics:** First-principles calculations / DFT (VASP)
* **Programming & Symbolic Tools:** Python, Mathematica/Wolfram Language, Linux/Unix Shell, Git, LaTeX, Origin
* **Theoretical & Mathematical Physics:** Non-equilibrium transport; Differential geometry; Berry-phase physics; Asymptotic methods and perturbation theory; Group-theoretical methods
* **Languages:** English (Working Proficiency), Mandarin (Native), Cantonese (Fluent)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Learning
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Notes
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
