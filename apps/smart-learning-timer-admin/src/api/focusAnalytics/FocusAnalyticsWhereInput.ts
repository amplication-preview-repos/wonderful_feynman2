import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusAnalyticsWhereInput = {
  id?: StringFilter;
  sessionsCompleted?: IntNullableFilter;
  totalFocusTime?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
