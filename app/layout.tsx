
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Adetunji Samuel Adedeji | Full Stack Developer",
  description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects. Built ProHealth Nexus — a HIPAA-compliant healthcare platform.",
  keywords: ["full stack developer", "React developer", "Node.js", "freelance developer", "web developer Nigeria", "healthcare app developer"],
  authors: [{ name: "Adetunji Samuel Adedeji" }],
  openGraph: {
    title: "Adetunji Samuel Adedeji | Full Stack Developer",
    description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects.",
    url: "https://my-portfolio-nine-sable-60.vercel.app",
    siteName: "Adetunji Samuel Adedeji Portfolio",
    images: [{ url: "/images/prohealth/cover.png", width: 1200, height: 630, alt: "Adetunji Samuel Adedeji Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adetunji Samuel Adedeji | Full Stack Developer",
    description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects.",
    images: ["/images/prohealth/cover.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
