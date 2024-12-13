import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FocusAnalyticsListRelationFilter } from "../focusAnalytics/FocusAnalyticsListRelationFilter";
import { FocusSessionListRelationFilter } from "../focusSession/FocusSessionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  focusAnalyticsItems?: FocusAnalyticsListRelationFilter;
  focusSessions?: FocusSessionListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  rewards?: RewardListRelationFilter;
  username?: StringFilter;
};
