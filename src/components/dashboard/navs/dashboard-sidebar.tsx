"use client";
import { usePathname } from "next/navigation";

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
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";

export default function DashboardSideBar() {
  const path = usePathname();

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
          <SidebarItem
            url="/dashboard"
            icon={Home}
            label="Dashboard"
            active={path === "/dashboard" ? true : false}
          />
          <SidebarItem
            url="/dashboard/properties"
            icon={Building}
            label="Property"
            active={path === "/dashboard/properties" ? true : false}
          />
          <SidebarItem
            url="/dashboard/users"
            icon={UserRoundCog}
            label="Users"
            active={path === "/dashboard/users" ? true : false}
          />
          <SidebarItem
            url="/dashboard/leads"
            icon={Users}
            label="Leads"
            active={path === "/dashboard/leads" ? true : false}
          />
          <SidebarItem
            url="/dashboard/conversations"
            icon={MessageSquare}
            label="Conversation"
            active={path === "/dashboard/conversations" ? true : false}
          />
          <SidebarItem
            url="/dashboard/calendar"
            icon={Calendar}
            label="Calendar"
            active={path === "/dashboard/calendar" ? true : false}
          />
          <SidebarItem
            url="/dashboard/transactions"
            icon={FileText}
            label="Transaction"
            active={path === "/dashboard/transactions" ? true : false}
          />
        </nav>
      </div>
      <button className="flex items-center px-2 py-2 text-lg font-medium bg-transparent text-dash-muted-foreground hover:bg-dash-accent hover:text-dash-foreground rounded-dash-md cursor-pointer">
        <LogOut className="mr-3 h-5 w-5" />
        Logout
      </button>
    </aside>
  );
}
