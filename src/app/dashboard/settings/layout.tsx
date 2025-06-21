import Profiledashboard from "@/components/dashboard/profile/Profiledashboard";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fusion-AI",
  description: "Fusion Ai theme and dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className={` bg-[#f9fafb] text-gray-900`}>
         <div className="flex w-full"> 
          <Profiledashboard />
          <main className="flex-1 rounded-r-xl w-full">{children}</main> 
        </div>
      </body>
  );
}
