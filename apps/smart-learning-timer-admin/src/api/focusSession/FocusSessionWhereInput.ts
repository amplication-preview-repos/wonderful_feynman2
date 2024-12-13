import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FocusSessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  focusLevel?: IntNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
