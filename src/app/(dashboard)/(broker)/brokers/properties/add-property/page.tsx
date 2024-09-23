import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

const mockPropertyTypes = [
  { name: "House", id: 1 },
  { name: "Apartment", id: 2 },
  { name: "Condo", id: 3 },
  { name: "Townhouse", id: 4 },
];

const mockCurrencyTypes = [
  { name: "MXN", value: "MXN" },
  { name: "USD", value: "USD" },
  { name: "CAD", value: "CAD" },
];

export default async function BrokerAddPropertyPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/properties/add-property");
  }

  return (
    <div>
      <h1>Create Broker Properties Page</h1>
      <PropertyFormTabs
        propertyTypes={mockPropertyTypes}
        currencyOptions={mockCurrencyTypes}
      />
    </div>
  );
}
