import { FocusSession as TFocusSession } from "../api/focusSession/FocusSession";

export const FOCUSSESSION_TITLE_FIELD = "id";

export const FocusSessionTitle = (record: TFocusSession): string => {
  return record.id?.toString() || String(record.id);
};
