import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "../globals.css";

import { SessionProvider } from "next-auth/react";

import DashboardSideBar from "@/components/dashboard/navs/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import QuickActionToolbar from "@/components/dashboard/navs/quick-action-toolbar";
import DashboardNav from "@/components/dashboard/navs/dashboard-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homelife Dashboard",
  description: "Homelife Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      />
      <body className={inter.className}>
        <SessionProvider>
          <div className="flex h-screen bg-dash-background font-dash-sans">
            <DashboardSideBar />

            <div className="flex flex-1 flex-col overflow-hidden">
              <DashboardHeader agentName="Alexandar Simmons" />

              <main className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  <QuickActionToolbar />

                  {children}
                </div>
              </main>
              <DashboardNav />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
