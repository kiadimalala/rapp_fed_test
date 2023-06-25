import "./globals.css";

import { Navigation } from "@app/components";

import { markOT } from "@app/fonts";

export const metadata = {
  title: "Lumi by Pampers",
  description: "A RAPP IO - Front End Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={markOT.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
