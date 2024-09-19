import { getAllBrokerPropertiesAPIV1 } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/properties");
  }

  const res = await getAllBrokerPropertiesAPIV1(session.user.accessToken);

  const properties = res.data;

  return (
    <div>
      <h1>Properties Page</h1>
      <h1>ALL THE PROPERTIES</h1>
      {properties.length &&
        properties.map((property: any) => (
          <div key={property.id}>
            <h2>{property.attributes.price}</h2>
            <p>{property.attributes.description}</p>
          </div>
        ))}
    </div>
  );
}
