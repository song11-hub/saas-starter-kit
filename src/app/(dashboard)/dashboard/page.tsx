import { auth } from "@/lib/auth";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const session = await auth();
  const subscription = session?.user?.id
    ? await db.subscription.findUnique({ where: { userId: session.user.id } })
    : null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-1">
        Welcome back, {session?.user?.name || session?.user?.email}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Plan</h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold capitalize">{subscription?.plan || "free"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold capitalize">{subscription?.status || "active"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Teams</h3>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {session?.user?.id
                ? await db.teamMember.count({ where: { userId: session.user.id } })
                : 0}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
