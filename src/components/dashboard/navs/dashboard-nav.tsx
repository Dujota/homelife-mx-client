import {
  MessageSquare,
  Building,
  Users,
  Calendar,
  LayoutDashboard,
} from "lucide-react";
import NavItem from "./nav-item";

export default function DashboardNav() {
  return (
    <nav className="bg-dash-card border-t border-dash-border flex justify-between items-center p-4 md:hidden shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
      <NavItem icon={LayoutDashboard} label="Dashboard" />
      <NavItem icon={MessageSquare} label="Message" />
      <NavItem icon={Building} label="Property" />
      <NavItem icon={Users} label="Leads" />
      <NavItem icon={Calendar} label="Calendar" />
    </nav>
  );
}
