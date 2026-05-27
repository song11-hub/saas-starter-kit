import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default async function TeamPage() {
  const session = await auth();
  const memberships = session?.user?.id
    ? await db.teamMember.findMany({
        where: { userId: session.user.id },
        include: { team: true },
      })
    : [];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Team</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your teams and members</p>

      <div className="mt-8 max-w-xl">
        {memberships.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-slate-500 dark:text-slate-400">You are not a member of any team yet.</p>
              <p className="text-sm text-slate-400 mt-1">Create a team to start collaborating.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {memberships.map((m) => (
              <Card key={m.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{m.team.name}</h3>
                    <span className="text-xs font-medium uppercase text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {m.role}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{m.team.slug}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
