import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nasdag Design og IT",
  description: "Design og IT – Nasdag",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
