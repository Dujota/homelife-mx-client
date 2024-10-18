import { getOnePropertyBrokerAPIV1 } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

import DashboardPropertyShow from "@/components/dashboard/properties/show/dashboard-property-show";

export default function PropertyShowPage() {
  return <DashboardPropertyShow />;
}
