import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import SideBar from "./components/sidebar/SideBar";
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
        <NavBar />
        <SideBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
