import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusAnalyticsCreateInput = {
  sessionsCompleted?: number | null;
  totalFocusTime?: number | null;
  user?: UserWhereUniqueInput | null;
};
