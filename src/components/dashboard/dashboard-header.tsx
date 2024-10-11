import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardHeader({
  agentName = "Alexandar Simmons",
}: {
  agentName: string;
}) {
  return (
    <header className="bg-dash-card border-b border-dash-border flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden text-dash-muted-foreground hover:text-dash-foreground bg-transparent cursor-pointer">
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/">
          <Image
            src="/images/logos/nav-black.svg"
            alt="HOMELIFE"
            width={120}
            height={40}
            className="hidden md:block lg:hidden"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src="/avatar.png"
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-medium hidden md:inline-block text-dash-foreground">
          {agentName}
        </span>
      </div>
    </header>
  );
}
