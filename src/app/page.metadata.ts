import type { Metadata } from "next";
import { defaultMetadata } from "./metadata";

// Home page specific metadata that overrides defaults where needed
export const homeMetadata: Metadata = {
  ...defaultMetadata,
  title: "GBranding - Premium Branding on Subscription | Unlimited Design Services",
  description:
    "Get unlimited branding designs for a flat monthly fee. Professional brand identity services with quick turnarounds. Pause or cancel anytime.",
  keywords: [
    ...(defaultMetadata.keywords as string[]),
    "unlimited branding",
    "branding subscription",
    "affordable branding",
    "business logo",
    "brand guidelines",
    "professional design",
    "brand identity design",
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GBranding - Premium Branding on Subscription | Unlimited Design Services",
    description:
      "Get unlimited branding designs for a flat monthly fee. Professional brand identity services with quick turnarounds. Pause or cancel anytime.",
    images: [
      {
        url: "https://gbranding.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "GBranding - Unlimited Branding Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBranding - Premium Branding on Subscription | Unlimited Design Services",
    description:
      "Get unlimited branding designs for a flat monthly fee. Professional brand identity services with quick turnarounds. Pause or cancel anytime.",
    creator: "@gbranding",
    images: ["https://gbranding.co/twitter-image.png"],
  },
  alternates: {
    ...defaultMetadata.alternates,
    canonical: "https://gbranding.co",
  },
};
