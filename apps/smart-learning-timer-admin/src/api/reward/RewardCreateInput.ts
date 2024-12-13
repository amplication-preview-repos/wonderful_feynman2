import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RewardCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
