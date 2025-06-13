    import type { Metadata } from "next";
    import { Poppins } from "next/font/google";
    import Dashboard from "../../components/dashboard/Dashboard";
    import ChatSidebar from "@/components/dashboard/ChatSidebar";

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
          <body
            className={`${poppins.className} bg-[#f9fafb] text-gray-900 dark:bg-[#1f1f1f] dark:text-white`}
          >
            <div className="h-full overflow-hidden w-full px-2 py-2 sm:px-4 sm:py-4">
              <div className="flex h-full w-full rounded-xl dark:bg-[#2c2c2e] max-w-[1600px] mx-auto">
                <div className="w-64 h-full">
                  <Dashboard />
                </div>

                <div className="flex flex-1 h-full">
                  <main className="flex-1 h-full overflow-y-auto px-2 dark:bg-[#1f1f1f]">
                    {children}
                  </main>
                  <div className="w-72 h-full dark:bg-[#252525] border-r border-gray-300 dark:border-gray-700">
                    <ChatSidebar />
                  </div>             
                </div>
              </div>
            </div>
          </body>
        </html>
      );
    }
