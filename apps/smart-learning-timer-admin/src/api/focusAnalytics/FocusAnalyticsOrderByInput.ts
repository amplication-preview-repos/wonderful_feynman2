import { SortOrder } from "../../util/SortOrder";

export type FocusAnalyticsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sessionsCompleted?: SortOrder;
  totalFocusTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
