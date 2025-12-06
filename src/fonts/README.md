# Src Fonts

This directory is for font files that you want to import directly in your CSS/SCSS files rather than reference from the public directory.

## Usage

Place font files here, then import them in your CSS or SCSS files:

```css
/* In a CSS file */
@font-face {
  font-family: "CustomFont";
  src: url("../fonts/CustomFont-Regular.woff2") format("woff2"), url("../fonts/CustomFont-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Or create a dedicated fonts.css/scss file in this directory:

```css
/* src/fonts/fonts.css */
@font-face {
  font-family: "CustomFont";
  src: url("./CustomFont-Regular.woff2") format("woff2"), url("./CustomFont-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CustomFont";
  src: url("./CustomFont-Bold.woff2") format("woff2"), url("./CustomFont-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

Then import the fonts.css file in your main CSS file or in a component:

```jsx
// In your app layout or globals.css
import "@/fonts/fonts.css";
```

## When to use src fonts vs. public fonts

Use fonts in src when:

- You want the bundler to process and optimize the font files
- You want to import them directly in your CSS
- You want to take advantage of hashing for cache busting

Use fonts in public when:

- You want to reference them with absolute URLs
- You're using @font-face in a global CSS file
- You need to reference them outside of your React components
