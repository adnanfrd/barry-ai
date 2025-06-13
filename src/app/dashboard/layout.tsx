import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Dashboard from "../../components/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Fusion-AI",
  description: "Fusion Ai theme and dashboard",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <body className={`${poppins.className} bg-[#f9fafb] text-gray-900 dark:bg-[#1f1f1f] dark:text-white`}>
        <div className="flex min-h-screen px-2 py-2 rounded-xl bg-[#eae9ec] dark:bg-[#2c2c2e] w-full">
            <Dashboard  />
          <main className="flex-1 px-2 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
