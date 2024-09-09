// import { getAllProperties } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/listings");
  }

  // const properties = await getAllProperties(session.user.accessToken);

  return (
    <div>
      <h1>Properties Page</h1>
      <h1>ALL THE PROPERTIES</h1>
    </div>
  );
}
