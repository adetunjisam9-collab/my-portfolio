
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";
import Providers from "@/components/Providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Adetunji Samuel Adedeji | Full Stack Developer",
  description: "Full stack developer specialising in React, Node.js and PostgreSQL. Available for freelance projects. Built ProHealth Nexus — a HIPAA-compliant healthcare platform.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Providers>
          <AOSInit />
          {children}
        </Providers>
      </body>
    </html>
  );
}