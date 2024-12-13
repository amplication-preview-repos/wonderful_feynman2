import { FocusAnalyticsWhereInput } from "./FocusAnalyticsWhereInput";
import { FocusAnalyticsOrderByInput } from "./FocusAnalyticsOrderByInput";

export type FocusAnalyticsFindManyArgs = {
  where?: FocusAnalyticsWhereInput;
  orderBy?: Array<FocusAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
