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
  title: "Adetunji Samuel Adedeji | Full Stack Developer",
  description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects. Built ProHealth Nexus — a HIPAA-compliant healthcare platform.",
  keywords: ["full stack developer", "React developer", "Node.js", "freelance developer", "web developer Nigeria", "healthcare app developer"],
  authors: [{ name: "Adetunji Samuel Adedeji" }],
  openGraph: {
    title: "Adetunji Samuel Adedeji | Full Stack Developer",
    description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Adetunji Samuel Adedeji Portfolio",
    images: [
      {
        url: "/images/prohealth/cover.png",
        width: 1200,
        height: 630,
        alt: "Adetunji Samuel Adedeji Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adetunji Samuel Adedeji | Full Stack Developer",
    description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects.",
    images: ["/images/prohealth/cover.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
