import { FocusAnalytics } from "../focusAnalytics/FocusAnalytics";
import { FocusSession } from "../focusSession/FocusSession";
import { Reward } from "../reward/Reward";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  focusAnalyticsItems?: Array<FocusAnalytics>;
  focusSessions?: Array<FocusSession>;
  id: string;
  lastName: string | null;
  name: string | null;
  rewards?: Array<Reward>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
