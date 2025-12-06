import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata, defaultViewport } from "./metadata";

export const metadata: Metadata = defaultMetadata;
export const viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-satoshi antialiased">{children}</body>
    </html>
  );
}
