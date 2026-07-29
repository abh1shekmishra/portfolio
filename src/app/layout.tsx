import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Abhishek Mishra · Software Engineer",
  description:
    "Abhishek Mishra, software engineer building web and AI products, and real-time 3D. 3+ years shipping production software end to end.",
  openGraph: {
    title: "Abhishek Mishra · Software Engineer",
    description: "Building web and AI products, and real-time 3D.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <div className="page-ambient" aria-hidden />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
