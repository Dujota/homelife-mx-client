import { getAllListingsPublic } from "@/lib/models/listings/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/listings");
  }

  const listings = await getAllListingsPublic();

  console.log(listings);

  return (
    <div>
      Listing Page
      <h1>ALL THE PROPERTIES</h1>
    </div>
  );
}
