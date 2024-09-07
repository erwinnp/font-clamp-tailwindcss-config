# Tailwind CSS Font Size Configuration

This configuration provides responsive font sizes using Tailwind CSS with a 4px system. The `clamp()` function ensures that the font sizes adjust based on the viewport width while staying within specified minimum and maximum limits. 

## Font Sizes

### `sm`
- **Value:** `clamp(0.75rem, 0.2vw + 0.5rem, 0.875rem)`
- **Minimum:** `0.75rem` (12px)
- **Ideal:** `0.2vw + 0.5rem`
- **Maximum:** `0.875rem` (14px)
- **Description:** Small text size suitable for captions or minor UI elements.

### `base`
- **Value:** `clamp(1rem, 0.5vw + 0.75rem, 1.125rem)`
- **Minimum:** `1rem` (16px)
- **Ideal:** `0.5vw + 0.75rem`
- **Maximum:** `1.125rem` (18px)
- **Description:** Standard text size for most body text and primary content.

### `lg`
- **Value:** `clamp(1.25rem, 0.75vw + 1rem, 1.375rem)`
- **Minimum:** `1.25rem` (20px)
- **Ideal:** `0.75vw + 1rem`
- **Maximum:** `1.375rem` (22px)
- **Description:** Larger text for headings or important content that needs to stand out.

### `xl`
- **Value:** `clamp(1.5rem, 1vw + 1.25rem, 1.625rem)`
- **Minimum:** `1.5rem` (24px)
- **Ideal:** `1vw + 1.25rem`
- **Maximum:** `1.625rem` (26px)
- **Description:** Extra-large text for major headings or prominent sections.

### `2xl`
- **Value:** `clamp(1.75rem, 1.25vw + 1.5rem, 1.875rem)`
- **Minimum:** `1.75rem` (28px)
- **Ideal:** `1.25vw + 1.5rem`
- **Maximum:** `1.875rem` (30px)
- **Description:** Two times extra-large text for top-level headings or important highlights.

### `3xl`
- **Value:** `clamp(2rem, 1.5vw + 1.75rem, 2.125rem)`
- **Minimum:** `2rem` (32px)
- **Ideal:** `1.5vw + 1.75rem`
- **Maximum:** `2.125rem` (34px)
- **Description:** Three times extra-large text for major sections or standout elements.

### `4xl`
- **Value:** `clamp(2.5rem, 2vw + 2rem, 2.625rem)`
- **Minimum:** `2.5rem` (40px)
- **Ideal:** `2vw + 2rem`
- **Maximum:** `2.625rem` (42px)
- **Description:** Four times extra-large text for headings or important callouts.

### `5xl`
- **Value:** `clamp(3rem, 2.5vw + 2.5rem, 3.125rem)`
- **Minimum:** `3rem` (48px)
- **Ideal:** `2.5vw + 2.5rem`
- **Maximum:** `3.125rem` (50px)
- **Description:** Five times extra-large text for prominent headings or impactful statements.

### `6xl`
- **Value:** `clamp(3.5rem, 3vw + 3rem, 3.75rem)`
- **Minimum:** `3.5rem` (56px)
- **Ideal:** `3vw + 3rem`
- **Maximum:** `3.75rem` (60px)
- **Description:** Six times extra-large text for very large headings or display text.

### `7xl`
- **Value:** `clamp(4rem, 3.5vw + 3.5rem, 4.25rem)`
- **Minimum:** `4rem` (64px)
- **Ideal:** `3.5vw + 3.5rem`
- **Maximum:** `4.25rem` (68px)
- **Description:** Seven times extra-large text for prominent titles or major section headings.

### `8xl`
- **Value:** `clamp(4.5rem, 4vw + 4rem, 4.75rem)`
- **Minimum:** `4.5rem` (72px)
- **Ideal:** `4vw + 4rem`
- **Maximum:** `4.75rem` (76px)
- **Description:** Eight times extra-large text for eye-catching headings or standout content.

### `9xl`
- **Value:** `clamp(5rem, 4.5vw + 4.5rem, 5.25rem)`
- **Minimum:** `5rem` (80px)
- **Ideal:** `4.5vw + 4.5rem`
- **Maximum:** `5.25rem` (84px)
- **Description:** Nine times extra-large text for highly prominent titles or key elements.

### `10xl`
- **Value:** `clamp(5.5rem, 5vw + 5rem, 5.75rem)`
- **Minimum:** `5.5rem` (88px)
- **Ideal:** `5vw + 5rem`
- **Maximum:** `5.75rem` (92px)
- **Description:** Ten times extra-large text for the most significant headings or display text.

## Usage

You can use these font sizes in your Tailwind CSS classes by applying the appropriate size class, such as `text-sm`, `text-base`, `text-lg`, etc.

```html
<p class="text-sm">This is small text.</p>
<p class="text-base">This is base text.</p>
<h1 class="text-4xl">This is a large heading.</h1>
