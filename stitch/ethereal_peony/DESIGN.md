# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star: "The Ethereal Editor"
The Creative North Star for this design system is **The Ethereal Editor**. We are moving away from the rigid, heavy, and dark architectural layouts of the past toward a digital experience that feels like a luxury fashion editorial: breathable, light-drenched, and intentionally rhythmic.

This system rejects the "boxed-in" nature of traditional web templates. We achieve a premium feel through **intentional asymmetry**, where large-scale typography breaks the grid, and elements overlap to create a sense of physical depth. By prioritizing "white space" as an active design element rather than "empty space," we create a high-end, feminine aesthetic that is sophisticated rather than "cute."

---

## 2. Colors: Tonal Depth & Luminous Accents
Our color strategy relies on a monochromatic foundation of warm whites and soft pinks, punctuated by high-chroma accents.

### Color Palette Reference
*   **Primary (Action):** `#b7005e` (Primary) / `#db2777` (Primary Container)
*   **Secondary (Subtle Action):** `#9e3b5f` (Secondary) / `#fc86ac` (Secondary Container)
*   **Surface Foundation:** `#fff7fa` (Surface) / `#ffffff` (Surface Container Lowest)
*   **Neutral Text:** `#1f1a1e` (On Surface)
*   **Muted Text:** `#594047` (On Surface Variant)

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** To define boundaries, designers must use tonal shifts. A section should transition from `surface` to `surface-container-low` to create a change in context. This "edge-to-edge" color blocking mimics high-end interior design rather than a wireframe.

### Surface Hierarchy & Nesting
Treat the interface as a series of stacked, semi-translucent layers:
1.  **Base:** `surface` (#fff7fa)
2.  **Sectioning:** `surface-container-low` (#fcf1f7)
3.  **Interactive Elements:** `surface-container-lowest` (#ffffff) for maximum "pop."

### The "Glass & Gradient" Rule
To add "soul" to the layout:
*   **Floating Elements:** Use `surface-container-lowest` with a 70% opacity and a `20px` backdrop-blur. 
*   **Hero CTAs:** Use a subtle linear gradient (45-degree) from `primary` (#b7005e) to `primary_container` (#db2777) to prevent the vibrant pink from looking flat or "plastic."

---

## 3. Typography: The Editorial Voice
We utilize a pairing of **Manrope** (Display/Headlines) for a modern, geometric character and **Inter** (Body/Labels) for high-performance legibility.

*   **Display (Large/Medium/Small):** `manrope`. Use these for hero statements. Apply `-0.02em` letter-spacing and `headline-lg` (2rem) or higher.
*   **Headlines:** `manrope`. These should be set in Medium or Semi-Bold weights to establish authority.
*   **Body (Large/Medium/Small):** `inter`. Set `body-lg` (1rem) with a generous `1.6` line-height to ensure the "airy" feel is maintained in long-form text.
*   **Labels:** `inter`. Use `label-md` (0.75rem) in All-Caps with `0.05em` letter-spacing for a "runway" aesthetic on small metadata.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows and layers are light-sources, not structural crutches.

*   **The Layering Principle:** Avoid shadows on standard cards. Instead, place a `#ffffff` card on a `#f6ebf1` (`surface-container`) background. This creates a "soft lift."
*   **Ambient Shadows:** Use shadows only for components that physically float (e.g., Modals, Popovers). Use a "Tinted Shadow": 
    *   `box-shadow: 0 10px 40px rgba(186, 0, 96, 0.06);` (A 6% opacity pink-tinted shadow).
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., input fields), use `outline-variant` at 20% opacity. Never use pure black or high-contrast grey.
*   **Glassmorphism:** Navigation bars should always be semi-transparent with a backdrop-blur. This ensures the vibrant pink accents bleed through softly as the user scrolls, maintaining a cohesive palette.

---

## 5. Components: Refined Interaction

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` roundedness (1.5rem), no border. 
*   **Secondary:** `surface-container-highest` background with `primary` text.
*   **Tertiary:** Ghost style; `primary` text with a background that appears only on hover at 8% opacity.

### Input Fields
*   **Style:** Minimalist. No bottom line or heavy box. Use `surface-container-low` with a `md` (0.75rem) corner radius. On focus, transition the background to `surface-container-lowest` and add a 1px "Ghost Border."

### Cards
*   **Rule:** Forbid divider lines. Separate card content using `body-md` (Inter) for the description and `label-sm` (Inter, All-Caps) for tags. Use vertical whitespace (24px - 32px) to define hierarchy.

### Chips
*   **Style:** Pill-shaped (`full` roundedness). Use `secondary_fixed` for the background and `on_secondary_container` for text to create a soft, high-end contrast.

### Featured Editorial Component (Signature)
*   **The "Overlapping Hero":** A component where a high-resolution image sits in a `xl` rounded container, with a `display-md` headline overlapping the image edge by 24px. This breaks the grid and establishes the "Editorial" look.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is 80px, try a right margin of 120px for featured sections.
*   **Do** use "On-Surface-Variant" (#594047) for secondary text to keep the interface soft.
*   **Do** leverage the `xl` (1.5rem) corner radius for large containers to maintain the "feminine" softness.

### Don’t:
*   **Don't** use 1px solid dividers. Use a 40px gap or a subtle background color shift instead.
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#1f1a1e).
*   **Don't** use "Drop Shadows" with 20%+ opacity. They ruin the "Airy" North Star.
*   **Don't** overcrowd the screen. If you're unsure, add 16px more padding.