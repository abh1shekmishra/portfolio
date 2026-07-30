import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
