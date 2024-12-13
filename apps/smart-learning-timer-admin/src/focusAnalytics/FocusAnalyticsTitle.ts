import { FocusAnalytics as TFocusAnalytics } from "../api/focusAnalytics/FocusAnalytics";

export const FOCUSANALYTICS_TITLE_FIELD = "id";

export const FocusAnalyticsTitle = (record: TFocusAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
