import Profiledashboard from "@/components/dashboard/profile/Profiledashboard";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
export const metadata: Metadata = {
  title: "Fusion-AI",
  description: "Fusion Ai theme and dashboard",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
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
      <body className={`${poppins.className} bg-[#f9fafb] text-gray-900`}>
         <div className="flex w-full"> 
          <Profiledashboard />
          <main className="flex-1 rounded-r-xl w-full">{children}</main> 
        </div>
      </body>
    </html>
  );
}
