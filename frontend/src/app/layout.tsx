import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sidebar/SideBar";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
          <SideBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
