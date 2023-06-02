/**
 * this layout.tsx is serving for fot for the ./page.tsx file
 */

import SideBar from "@/components/SideBar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Music APP",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <SideBar>{children}</SideBar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
