# Public Assets

This directory contains static assets that are served directly by the web server without being processed by the JavaScript bundler.

## Usage

- **Images**: Place images like logos, backgrounds, and photos here that don't need to be bundled with the JavaScript code.
- **Icons**: Place icon files here that need to be referenced directly by URL.

## When to use public assets vs. imported assets

Use public assets when:

- You need a direct URL to the asset
- The asset is referenced in places outside your React components (like meta tags)
- The asset is large and you don't want it to be included in the JavaScript bundle

Reference public assets in your code with:

```jsx
// In JSX:
<img src="/assets/images/logo.png" alt="Logo" />

// In CSS:
background-image: url('/assets/images/background.jpg');
```

Note that all public assets are served from the root URL, so you should use absolute paths starting with `/`.
