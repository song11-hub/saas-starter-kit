import type { User, Team, TeamMember, Subscription } from "@prisma/client";

export type { User, Team, TeamMember, Subscription };

export type PlanTier = "free" | "pro" | "enterprise";

export interface DashboardUser {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  plan: PlanTier;
  teams: {
    id: string;
    name: string;
    slug: string;
    role: string;
  }[];
}
