import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const plans = [
  { name: "Free", price: "$0", features: ["1 team", "Basic analytics", "Community support"] },
  { name: "Pro", price: "$29/mo", features: ["Unlimited teams", "Advanced analytics", "Priority support", "Custom domains"] },
  { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "SSO", "Dedicated support", "SLA"] },
];

export default async function BillingPage() {
  const session = await auth();
  const subscription = session?.user?.id
    ? await db.subscription.findUnique({ where: { userId: session.user.id } })
    : null;

  const currentPlan = subscription?.plan || "free";

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Billing</h1>
      <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your subscription</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={currentPlan === plan.name.toLowerCase() ? "ring-2 ring-indigo-500" : ""}>
            <CardHeader>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span className="text-green-500">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              {currentPlan === plan.name.toLowerCase() ? (
                <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">Current plan</p>
              ) : (
                <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                  Upgrade
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
