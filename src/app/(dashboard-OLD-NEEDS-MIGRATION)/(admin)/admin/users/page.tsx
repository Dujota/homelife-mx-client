import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>Users</h1>
      USER LIST PAGE
    </div>
  );
}
