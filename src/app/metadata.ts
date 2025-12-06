import type { Metadata, Viewport } from "next";

// Base URL for canonical links and OG images
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://gbranding.co";

// Default metadata that can be overridden at the page level
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | GBranding",
    default: "GBranding - Premium Branding on Subscription",
  },
  description: "Unlimited branding designs for a flat monthly fee. Pause or cancel anytime.",
  keywords: [
    "branding",
    "design",
    "subscription",
    "logo design",
    "brand identity",
    "unlimited design",
    "graphic design",
    "branding services",
  ],
  authors: [{ name: "GBranding Team" }],
  creator: "GBranding",
  publisher: "GBranding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Design Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "GBranding - Premium Branding on Subscription",
    description: "Unlimited branding designs for a flat monthly fee. Pause or cancel anytime.",
    siteName: "GBranding",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GBranding - Premium Branding Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBranding - Premium Branding on Subscription",
    description: "Unlimited branding designs for a flat monthly fee. Pause or cancel anytime.",
    creator: "@gbranding",
    images: [`${baseUrl}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": `${baseUrl}/en-US`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

// Default viewport metadata
export const defaultViewport: Viewport = {
  themeColor: "#0202FC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
