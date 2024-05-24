import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neosmart",
  description: "Technical documentation for Neosmart",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
