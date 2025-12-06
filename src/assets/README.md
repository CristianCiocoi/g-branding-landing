# Src Assets

This directory contains assets that should be imported directly in your React components. Unlike assets in the `public` folder, these files will be processed by the JavaScript bundler.

## Usage

- **Images**: Place smaller images, logos, and icons here that you want to import directly in components
- **Icons**: Place SVG icons here that will be imported as React components

## Benefits of importing assets

Assets imported in your code:

- Are optimized by the bundler
- Get hashed filenames for cache busting
- Only get included in the bundle if they're actually used
- Can be tree-shaken if not used
- For SVGs, can be imported as React components

## How to use

Import and use assets in your components:

```jsx
// Importing an image
import logo from "@/assets/images/logo.png";

function Header() {
  return <img src={logo} alt="Logo" />;
}

// Importing an SVG as a component (requires appropriate webpack/vite config)
import { ReactComponent as IconMenu } from "@/assets/icons/menu.svg";

function Navigation() {
  return <IconMenu className="w-6 h-6" />;
}
```

## When to use src assets vs. public assets

Use src assets when:

- The asset is small to medium sized
- The asset is used within your React components
- You want the asset to be optimized by the bundler
- You want to import SVGs as React components

Use public assets (in the public directory) for:

- Large files that shouldn't be included in the bundle
- Files that need direct URL access
- Files referenced outside your React components
