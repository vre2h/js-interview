import type { Metadata } from "next";
import "./globals.css";
import { font } from "./ui/fonts";

export const metadata: Metadata = {
  title: "JS Interview",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
