# Fonts

This directory contains font files that are served directly by the web server. Use this folder for font files that need to be loaded via `@font-face` in your CSS.

## Usage

Add font files (e.g., `.woff`, `.woff2`, `.ttf`, `.otf`) to this directory, then reference them in your CSS:

```css
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/CustomFont-Regular.woff2") format("woff2"), url("/fonts/CustomFont-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CustomFont";
  src: url("/fonts/CustomFont-Bold.woff2") format("woff2"), url("/fonts/CustomFont-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Best Practices

- Use WOFF2 format as the primary font format (best compression, modern browsers)
- Include WOFF as a fallback for older browsers
- Use `font-display: swap` to ensure text is visible while fonts are loading
- Consider using variable fonts to reduce the number of font files

## Alternative: Google Fonts or other CDNs

If you're using fonts from Google Fonts or other CDNs, you don't need to store them here. Instead, link to them directly in your HTML or import them in your CSS:

```css
/* In your globals.css or a dedicated fonts.css file */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
```
