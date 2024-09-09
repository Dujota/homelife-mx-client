import { getAllAdminPropertiesAPIV1 } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/properties");
  }

  const res = await getAllAdminPropertiesAPIV1(session.user.accessToken);

  const properties = res.data;

  return (
    <div>
      Properties Page
      <h1>ALL THE PROPERTIES</h1>
      {properties.map((property: any) => (
        <div key={property.id}>
          <h2>{property.attributes.price}</h2>
          <p>{property.attributes.description}</p>
        </div>
      ))}
    </div>
  );
}
