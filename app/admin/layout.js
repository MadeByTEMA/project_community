import { cookies } from "next/headers";
import { authPage } from "@/lib/AuthChecker";
import { notFound  } from "next/navigation";

export default async function ManagerLayout({ children }) {
  const cookieStore = await cookies();
  if (!authPage(cookieStore, ["ADMIN"])) {
    notFound();
    return null;
  }
  return <>{children}</>;
}