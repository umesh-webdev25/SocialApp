# Design System Specification: The Architectural Social

## 1. Overview & Creative North Star: "The Digital Curator"
This design system moves away from the chaotic, "attention-economy" aesthetic of traditional social media. Our Creative North Star is **The Digital Curator**. The goal is to provide a high-end, editorial environment where content feels archived rather than just "posted." 

We achieve this through **Intentional Negative Space** and **Asymmetric Depth**. By prioritizing structural hierarchy over decorative elements, we create a production-ready interface that feels as stable as a code editor but as fluid as a premium magazine. We reject the "boxed-in" layout of 2010-era social platforms in favor of a layered, expansive experience that breathes.

---

## 2. Colors & Tonal Architecture
The palette is rooted in deep indigos and slate grays, designed specifically for high-contrast legibility and a "dark-first" professional feel.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off major layout areas. 
*   **The Method:** Boundaries are defined strictly through background shifts. For instance, a feed (using `surface-container-low`) sits atop the global `background` (#0b1326). 
*   **Why:** Lines create visual noise. Tonal shifts create "zones" of focus.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials.
*   **Level 0 (Base):** `surface-dim` (#0b1326) — The canvas.
*   **Level 1 (Navigation/Sidebar):** `surface-container` (#171f33) — Anchored structural elements.
*   **Level 2 (Cards/Posts):** `surface-container-high` (#222a3d) — Content that needs to "pop" from the base.
*   **Level 3 (Modals/Popovers):** `surface-container-highest` (#2d3449) — Maximum focus and elevation.

### The "Glass & Gradient" Rule
To elevate the system above "flat" UI, use **Glassmorphism** for floating headers and navigation bars.
*   **Token:** Use `surface` colors at 70% opacity with a `backdrop-blur` of 12px–20px.
*   **Signature Textures:** For Primary CTAs, do not use flat hex codes. Apply a subtle linear gradient from `primary_container` (#4f46e5) to `on_secondary_fixed_variant` (#413f82) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography: Editorial Authority
We utilize **Inter** for its neutral, high-legibility character, but we apply it with aggressive scale contrasts to mimic high-end editorial design.

*   **Display (lg/md):** Reserved for "Moment" headers or milestone numbers. Use `-0.02em` letter spacing to tighten the visual impact.
*   **Headline (sm/md):** Used for profile names and section headers. These must be `semi-bold` to establish authority over the content.
*   **Body (lg):** The default for post content. We utilize `body-lg` (1rem) with a generous line-height (1.6) to ensure long-form social posts remain readable.
*   **Labels (md/sm):** Used for metadata (timestamps, view counts). These should utilize `on_surface_variant` (#c7c4d8) to recede into the background, ensuring they don't compete with the primary message.

---

## 4. Elevation & Depth: The Layering Principle
We convey importance through **Tonal Layering** rather than structural geometry.

*   **Ambient Shadows:** Traditional drop shadows are banned. When an element must float (like a "Compose" button), use a 24px–32px blur with the color `on_secondary_fixed` (#140f54) at 10% opacity. This creates a "glow" of depth rather than a muddy gray shadow.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a container boundary, use a **Ghost Border**. Apply `outline_variant` (#464555) at 15% opacity. It should be felt, not seen.
*   **Integrated Glass:** Floating elements (like a navigation pill) must use backdrop blurs. This prevents the UI from feeling like "stickers" on a page and instead makes it feel like an integrated part of the atmospheric environment.

---

## 5. Components

### Buttons: The Interaction Anchors
*   **Primary:** Gradient-filled (`primary_container` to `secondary_container`), `md` (0.75rem) rounded corners. Text is `on_primary_container`.
*   **Secondary:** Ghost-style. No background. `Ghost Border` (15% opacity `outline_variant`) that becomes 30% on hover.
*   **Tertiary:** Pure text-based with `label-md` styling.

### Cards & Feed Items: The Content Block
*   **Constraint:** No dividers. Use `xl` (1.5rem) vertical spacing between cards.
*   **Background:** Use `surface_container_low` for the card body. 
*   **Interaction:** On hover, shift background to `surface_container_high`. No movement/scaling—just a sophisticated tonal "lift."

### Input Fields: Minimalist Focus
*   **Base State:** `surface_container_lowest` with a subtle `outline_variant` at 10%.
*   **Focus State:** Border opacity increases to 100% using `primary` (#c3c0ff), with a 4px "aura" (outer glow) using the `primary` color at 5% opacity.

### Navigation Pill (Signature Component)
Instead of a top-bar, use a floating dock at the bottom or top center. 
*   **Style:** `surface_bright` at 80% opacity, `full` (9999px) roundedness, and a `backdrop-blur` of 16px. This reinforces the "high-end" curated feel.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. Offsetting a headline slightly to the left of the body text can create a sophisticated, custom look.
*   **Do** use `primary_fixed_dim` for icons to give them a soft, metallic sheen against dark backgrounds.
*   **Do** leverage `surface_container_highest` for tooltips to ensure they are the most elevated item in the stack.

### Don’t
*   **Don’t** use pure black (#000000) or pure white (#FFFFFF). Use the `surface` and `on_surface` tokens to maintain the "ink and paper" slate aesthetic.
*   **Don’t** use 1px dividers to separate comments. Use `body-sm` vertical padding and a background shift to `surface_container_low`.
*   **Don’t** use "bounce" animations. Use "expressive-linear" transitions (ease-in-out) with 200ms durations for a professional, snappy feel.