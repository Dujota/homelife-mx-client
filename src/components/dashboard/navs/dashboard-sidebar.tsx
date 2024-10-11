import Image from "next/image";
import SidebarItem from "./sidebar-item";
import {
  Building,
  Calendar,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function DashboardSideBar() {
  return (
    <aside className="hidden w-64 bg-dash-muted p-4 border-r border-dash-border lg:flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex">
          <Link href="/">
            <Image
              src="/images/logos/nav-black.svg"
              alt="HOMELIFE"
              width={120}
              height={60}
            />
          </Link>
        </div>
        <nav className="">
          <SidebarItem icon={Home} label="Dashboard" active />
          <SidebarItem icon={FileText} label="Transaction" />
          <SidebarItem icon={Building} label="Property" />
          <SidebarItem icon={Users} label="Leads" />
          <SidebarItem icon={Calendar} label="Calendar" />
          <SidebarItem icon={MessageSquare} label="Conversation" />
        </nav>
      </div>
      <button className="flex items-center px-2 py-2 text-lg font-medium bg-transparent text-dash-muted-foreground hover:bg-dash-accent hover:text-dash-foreground rounded-dash-md cursor-pointer">
        <LogOut className="mr-3 h-5 w-5" />
        Logout
      </button>
    </aside>
  );
}
