import { auth } from "@/server/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BrokersDashboard() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers");
  } else if (session.user.roles?.find((role: any) => role.name === "admin")) {
    return redirect("/admin");
  } else if (!session.user.roles?.find((role: any) => role.name === "broker")) {
    return redirect("/login?callbackUrl=/brokers");
  }

  return (
    <div>
      <h1>Brokers Dashboard</h1>
      <div className="flex flex-wrap">
        <Link href="/brokers/properties/add-property">
          <button className="mx-2">Add Property</button>
        </Link>
        {/* <Link href="/brokers/listings/add-listing">
          <button className="mx-2">Add Listings</button>
        </Link> */}
        {/* <Link href="/brokers/properties">
          <button className="mx-2">See Propertiess</button>
        </Link> */}
        <Link href="/brokers/listings">
          <button className="mx-2">See Listings</button>
        </Link>
      </div>
    </div>
  );
}
