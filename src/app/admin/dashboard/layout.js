
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
export const dynamic = "force-dynamic";
import AdminNavi from "@/app/components/AdminNavi";


export default async function AdminDashboardLayout({ children }) {
  const admin = await requireAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <AdminNavi />

        <main className="rounded-lg bg-white p-4 shadow-sm md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
