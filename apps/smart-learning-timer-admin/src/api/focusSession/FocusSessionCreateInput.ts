import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusSessionCreateInput = {
  endTime?: Date | null;
  focusLevel?: number | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
