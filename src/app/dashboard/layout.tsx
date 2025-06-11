import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Dashboard from '../../components/dashboard/Dashboard'
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
        <div className="flex px-6 py-10 rounded-xl min-h-screen bg-[#eae9ec] w-full">
          <Dashboard/>
          <main className="flex-1 px-6 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
