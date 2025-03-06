import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sina Salahshour Portfolio",
  description:
    "My resume and works collected in a beautiful single page portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
