import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
export const metadata: Metadata = {
  title: "Fusion-AI",
  description: "Fusion Ai theme and dashboard",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // customize weights
  variable: '--font-poppins',
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
