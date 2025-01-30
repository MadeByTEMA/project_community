import { cookies } from "next/headers";
import { verifyJWT, checkRole } from "@/lib/AuthChecker";
import { notFound  } from "next/navigation";

export default async function ManagerLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value || null;

  const user = verifyJWT(token);

  if (!checkRole(user, ["ADMIN", "MANAGER"])) {
    notFound();
    return null;
  }
  return <>{children}</>;
}