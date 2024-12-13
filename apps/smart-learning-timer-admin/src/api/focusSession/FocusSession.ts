import { User } from "../user/User";

export type FocusSession = {
  createdAt: Date;
  endTime: Date | null;
  focusLevel: number | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
