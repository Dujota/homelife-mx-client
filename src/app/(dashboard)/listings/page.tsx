import Header from "@/components/common/layout/header";
import PageHeader from "@/components/common/layout/page-header";
import PageWrapper from "@/components/common/layout/page-wrapper";
import Pagination from "@/components/pagination";
import PropertyList from "@/components/properties/property-list";
import { getAllProperties } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/listings");
  }

  const properties = await getAllProperties(session.user.accessToken);

  return (
    <>
      <Header />
      <PageHeader
        title="LISTINGS"
        ctaText="+ADD LISTING"
        ctaUrl="/listings/add-listing"
      />
      <PageWrapper className="gap-[1.625rem]">
        <PropertyList properties={properties.data} />
        <Pagination />
      </PageWrapper>
    </>
  );
}
