"use client";
import Link from "next/link";

export default function BrokersDashboard() {
  return (
    <div>
      <h1>Brokers Dashboard</h1>
      <div className="flex flex-wrap">
        <Link href="/brokers/properties/add-property">
          <button className="mx-2">Add Property</button>
        </Link>
        <Link href="/brokers/listings/add-listing">
          <button className="mx-2">Add Listings</button>
        </Link>
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
