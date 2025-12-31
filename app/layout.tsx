import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://fleetexpedite.com'),
  title: {
    default: "FleetExpedite - AI-Powered Fleet Management for Trucking",
    template: "%s | FleetExpedite"
  },
  description: "Modern AI-powered fleet management platform for trucking companies. Automated dispatch, real-time GPS tracking, and smart load matching. Built for owner operators and fleet managers.",
  keywords: [
    "fleet management software",
    "trucking dispatch system",
    "TMS software",
    "owner operator software",
    "GPS fleet tracking",
    "load board",
    "trucking management",
    "dispatch software",
    "AI fleet management"
  ],
  verification: {
    google: "lHPBpfT2mu2U33lQgKWkyAZe8D5IdFduCHcJ1CQIebE",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fleetexpedite.com",
    siteName: "FleetExpedite",
    title: "FleetExpedite - AI Fleet Management for Trucking",
    description: "Modern AI-powered fleet management platform for trucking companies and owner operators",
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetExpedite - AI Fleet Management",
    description: "Modern AI-powered fleet management for trucking companies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="lHPBpfT2mu2U33lQgKWkyAZe8D5IdFduCHcJ1CQIebE" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0XBRKFWYZ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XBRKFWYZ4');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}