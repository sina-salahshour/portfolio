import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { themeClassName } from "@/ui/layouts/main-layout/main-layout.css";
import { MainLayout } from "@/ui/layouts/main-layout/main-layout.layout";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  fallback: ["Verdana", "sans-serif"],
});

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
      <body className={clsx(sora.variable, themeClassName)}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
