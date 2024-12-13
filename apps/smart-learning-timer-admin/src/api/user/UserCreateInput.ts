import { FocusAnalyticsCreateNestedManyWithoutUsersInput } from "./FocusAnalyticsCreateNestedManyWithoutUsersInput";
import { FocusSessionCreateNestedManyWithoutUsersInput } from "./FocusSessionCreateNestedManyWithoutUsersInput";
import { RewardCreateNestedManyWithoutUsersInput } from "./RewardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  focusAnalyticsItems?: FocusAnalyticsCreateNestedManyWithoutUsersInput;
  focusSessions?: FocusSessionCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  name?: string | null;
  password: string;
  rewards?: RewardCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
