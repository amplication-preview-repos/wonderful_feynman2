import { User } from "../user/User";

export type FocusAnalytics = {
  createdAt: Date;
  id: string;
  sessionsCompleted: number | null;
  totalFocusTime: number | null;
  updatedAt: Date;
  user?: User | null;
};
