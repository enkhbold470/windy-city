import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import SidebarNav from "@/components/Side-navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"], // Specify the subset to avoid the preload error
});

export const metadata: Metadata = {
  title: "Windy city",
  description: "Created with NextJS application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {/* <SidebarNav /> */}
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
