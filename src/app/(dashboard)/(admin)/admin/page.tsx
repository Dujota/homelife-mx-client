"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1>ADMIN Dashboard</h1>
      <div className="flex flex-wrap">
        <Link href="/admin/properties/add-property">
          <button className="mx-2">Add Property</button>
        </Link>
        <Link href="/admin/listings/add-listing">
          <button className="mx-2">Add Listings</button>
        </Link>
        <Link href="/admin/properties">
          <button className="mx-2">See Propertiess</button>
        </Link>
        <Link href="/admin/listings">
          <button className="mx-2">See Listings</button>
        </Link>
      </div>
    </div>
  );
}
