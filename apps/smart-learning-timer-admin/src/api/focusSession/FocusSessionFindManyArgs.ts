import { FocusSessionWhereInput } from "./FocusSessionWhereInput";
import { FocusSessionOrderByInput } from "./FocusSessionOrderByInput";

export type FocusSessionFindManyArgs = {
  where?: FocusSessionWhereInput;
  orderBy?: Array<FocusSessionOrderByInput>;
  skip?: number;
  take?: number;
};
