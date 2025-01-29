import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Wrapped App",
  description: "developed by @chefberke, @chefharun",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${poppins.className}`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
