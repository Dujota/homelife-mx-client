import Header from "@/components/common/layout/header";
import PageHeader from "@/components/common/layout/page-header";
import PageWrapper from "@/components/common/layout/page-wrapper";
import Pagination from "@/components/pagination";
import PropertyList from "@/components/properties/property-list";
import { getAllBuildings } from "@/lib/models/buildings/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  const buildings = await getAllBuildings(session.user.accessToken);

  return (
    <>
      <Header />
      <PageHeader
        title="BUILDINGS"
        ctaText="+ADD BUILDING"
        ctaUrl="/buildings/add-building"
      />
      <PageWrapper>
        <PropertyList properties={buildings.data} />
        <Pagination />
      </PageWrapper>
    </>
  );
}
