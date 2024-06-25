import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ContactNFooter from "@/components/ContactNFooter";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav Dubey",
  description: "Fullstack Developer",
  keywords: [
    "Gaurav Dubey",
    "gaurav",
    "Portfolio",
    "gaurav dubey github",
    "gauravdubey19",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Cursor />
            <Navbar devName="<GD/>" />
            {children}
            <ContactNFooter devName="Gaurav" />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
