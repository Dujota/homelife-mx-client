import Header from "@/components/common/layout/header";
import PageHeader from "@/components/common/layout/page-header";
import PageWrapper from "@/components/common/layout/page-wrapper";
import CreateBuilding from "@/components/forms/create-building";

import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  return (
    <>
      <Header />
      <PageHeader title="ADD NEW BUILDING" ctaText="BACK" ctaUrl="/buildings" />
      <PageWrapper>
        <CreateBuilding />
      </PageWrapper>
    </>
  );
}
