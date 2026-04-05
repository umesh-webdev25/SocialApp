# Design System Specification

## 1. Overview & Creative North Star
This design system is built upon the philosophy of **"The Editorial Lens."** While inspired by the immediate, visual-first nature of social platforms, this system transcends the "generic feed" aesthetic. It treats digital content as a high-end gallery exhibition rather than a standard scroll. 

The Creative North Star focuses on **Refined Transparency** and **Intentional Breathing Room**. We move away from the rigid, boxed-in layouts of traditional social UI by utilizing generous whitespace, sophisticated tonal layering, and "glass" surfaces. This creates a premium, curated experience where the content is the protagonist, and the interface is the elegant, unobtrusive frame.

---

## 2. Colors & Surface Logic
The palette is rooted in soft, warm neutrals to provide a sophisticated foundation, allowing the high-energy "Signature Gradient" to command attention only where necessary.

### Tonal Foundations
- **Background (`#fcf9f8`):** Our canvas. It is intentionally off-white to reduce eye strain and provide a more "paper-like" editorial feel.
- **Surface Tiers:** We do not use borders to define sections. We use depth.
    - **Surface Container Lowest (`#ffffff`):** Reserved for the most prominent interactive cards or floating elements.
    - **Surface Container Low (`#f6f3f2`):** Used for subtle secondary grouping or background sections.
    - **Surface Container Highest (`#e4e2e1`):** Used for hover states or deeply recessed UI elements like search bars.

### The Signature Gradient
Our primary accent is a fluid transition: **Primary (`#b7004f`) → Secondary (`#833ab4`) → Tertiary (`#ac2c11`)**. 
- **The "No-Line" Rule:** 1px solid borders (like the traditional `#DBDBDB`) are strictly prohibited for sectioning. Use background shifts between `surface` and `surface-container-low` to define boundaries.
- **Glassmorphism Rule:** For navigation bars and floating headers, use `surface` at 80% opacity with a `12px` backdrop blur. This ensures the content "bleeds" through the UI, maintaining a sense of place.
- **Signature Textures:** Apply the primary-to-secondary gradient to high-impact CTAs and avatar "active" rings. This provides a "soul" to the interface that flat color cannot replicate.

---

## 3. Typography
We utilize **Inter** across all scales. To achieve an editorial look, we lean into high contrast between display sizes and body text.

- **Display (lg/md/sm):** Used for hero moments and high-impact headers. These should feel authoritative.
- **Headline & Title:** Used for content headings. Title-lg (`1.375rem`) is the standard for card headings.
- **Body (lg/md/sm):** Our primary communication tool. Use `body-md` (`0.875rem`) for standard feed text to maintain a modern, compact feel without sacrificing legibility.
- **Label (md/sm):** Reserved for metadata and micro-copy. These should utilize `on-surface-variant` (`#5a4045`) to create a clear visual hierarchy.

**Editorial Tip:** Use `body-lg` for introductory paragraphs with a slightly increased line height to invite the reader in.

---

## 4. Elevation & Depth
In this design system, depth is a functional tool, not a decorative one. We rely on **Tonal Layering** over structural lines.

- **The Layering Principle:** To create a "lifted" card, place a `surface-container-lowest` card on a `surface` background. The subtle shift in hex value creates a natural edge.
- **Ambient Shadows:** Shadows are rarely used. When necessary (e.g., a floating Action Button), use an extra-diffused shadow: `box-shadow: 0 12px 32px rgba(27, 28, 28, 0.06);`. The shadow color must be a tint of `on-surface`, never a pure black.
- **The "Ghost Border" Fallback:** If a layout requires a border for accessibility, use a "Ghost Border": `outline-variant` (`#e2bec3`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient background (Primary to Secondary) with `on-primary` text. Use `rounded-lg` (1rem) for a modern, soft aesthetic.
- **Secondary:** `surface-container-highest` background with `primary` text. No border.
- **Tertiary:** Transparent background, `primary` text. High-energy interaction with a subtle `surface-variant` hover state.

### Cards & Lists
- **The Divider Rule:** Forbid the use of horizontal divider lines. Instead, use the **Spacing Scale** (vertical whitespace) or a subtle transition to `surface-container-low` to separate items.
- **Images:** Content images within cards should use `rounded-lg` to match the component language.

### Avatars
- **The Signature Ring:** Active states or "Stories" use a 2px offset ring featuring the Signature Gradient.
- **Shape:** Always `full` (9999px).

### Input Fields
- **Styling:** Use `surface-container-low` as the field background. Instead of a heavy border, use a 1px "Ghost Border" on focus using the `primary` color. 
- **Typography:** Placeholder text should be `on-surface-variant` at `body-md`.

### Tooltips & Overlays
- **Styling:** Use `inverse-surface` with `inverse-on-surface` text for high contrast. Apply a `md` (0.75rem) corner radius.

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical layouts for image galleries to create a "scrapbook" editorial feel.
- **Do** utilize `duration-200` transitions for all hover states to ensure the UI feels responsive yet smooth.
- **Do** lean on typography weight (Semi-Bold vs Regular) to create hierarchy before reaching for color.

### Don't
- **Don't** use 100% opaque, high-contrast borders (e.g., #DBDBDB). They "trap" the eye and break the editorial flow.
- **Don't** use generic Material Design blue for links. Use the `primary` (`#b7004f`) or `secondary` (`#833ab4`) tokens.
- **Don't** overcrowd the screen. If a section feels busy, increase the padding by one step in the spacing scale rather than adding lines or boxes.

---

*This design system is a living framework. It relies on the designer’s intuition to balance the energy of the gradient with the serenity of the neutral surfaces.*