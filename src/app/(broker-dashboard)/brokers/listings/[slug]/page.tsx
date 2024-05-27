import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/login?callbackUrl=/brokers/listings/${params.slug}`);
  }

  return (
    <div>
      Listing Page
      <h1>{params.slug}</h1>
    </div>
  );
}
