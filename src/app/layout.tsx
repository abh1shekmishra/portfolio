import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Cursor from "@/components/Cursor";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abhishek Mishra · Unreal & Unity Developer",
  description:
    "Abhishek Mishra, real-time 3D and XR developer working in Unreal Engine (C++, Blueprints, multiplayer) and Unity (C#). 3+ years shipping VR, AR and desktop applications.",
  openGraph: {
    title: "Abhishek Mishra · Unreal & Unity Developer",
    description: "Real-time 3D and XR in Unreal Engine and Unity.",
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
        <Cursor />
        <div className="grain" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
