import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusSessionUpdateInput = {
  endTime?: Date | null;
  focusLevel?: number | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
