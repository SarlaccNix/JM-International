"use client";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { createContext } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = createContext<{ language: number }>({ language: 0 });
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <context.Provider value={{ language: 0 }}>
            {children}
            <Footer />
          </context.Provider>
        </main>
      </body>
    </html>
  );
}