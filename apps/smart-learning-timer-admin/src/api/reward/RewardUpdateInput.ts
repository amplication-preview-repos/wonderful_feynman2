import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RewardUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
