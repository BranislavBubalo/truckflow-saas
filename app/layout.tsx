import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruckFlow - AI Fleet Management",
  description: "Modern dispatch platform for trucking companies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
