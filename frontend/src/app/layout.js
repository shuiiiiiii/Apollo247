import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apollo 24|7",
  description: "Apllo Hospitals Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>        
        <title>Apollo 24|7</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
