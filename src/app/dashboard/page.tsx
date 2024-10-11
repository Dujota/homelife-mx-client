import React from "react";

import { Wallet, MessageSquare, Building, List, Users } from "lucide-react";
import StatCard from "@/components/dashboard/landing-page/stat-card";

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatCard icon={Wallet} title="Pending Transaction" value="2,000" />
      <StatCard icon={MessageSquare} title="New Messages" value="2,000" />
      <StatCard icon={Building} title="Total Properties" value="2,000" />
      <StatCard icon={List} title="Total Listing" value="2,000" />
      <StatCard icon={Users} title="Active Leads" value="2,000" />
    </div>
  );
}
