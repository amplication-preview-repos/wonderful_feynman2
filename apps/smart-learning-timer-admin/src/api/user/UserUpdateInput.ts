import { FocusAnalyticsUpdateManyWithoutUsersInput } from "./FocusAnalyticsUpdateManyWithoutUsersInput";
import { FocusSessionUpdateManyWithoutUsersInput } from "./FocusSessionUpdateManyWithoutUsersInput";
import { RewardUpdateManyWithoutUsersInput } from "./RewardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  focusAnalyticsItems?: FocusAnalyticsUpdateManyWithoutUsersInput;
  focusSessions?: FocusSessionUpdateManyWithoutUsersInput;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  rewards?: RewardUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
