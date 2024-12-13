import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusAnalyticsUpdateInput = {
  sessionsCompleted?: number | null;
  totalFocusTime?: number | null;
  user?: UserWhereUniqueInput | null;
};
