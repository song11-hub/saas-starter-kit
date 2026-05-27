import { auth } from "@/lib/auth";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SettingsForm } from "./form";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your profile</p>

      <div className="mt-8 max-w-xl">
        <Card>
          <CardHeader>
            <h2 className="font-semibold">Profile</h2>
          </CardHeader>
          <CardContent>
            <SettingsForm
              currentName={session?.user?.name || ""}
              currentEmail={session?.user?.email || ""}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
