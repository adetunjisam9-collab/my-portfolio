import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Adetunji Samuel Adedeji | Full Stack Developer",
  icons: {
    icon: "/favicon.svg",
  },
  description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects.",
};  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}