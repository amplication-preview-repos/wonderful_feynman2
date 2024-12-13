import { SortOrder } from "../../util/SortOrder";

export type FocusSessionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  focusLevel?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
