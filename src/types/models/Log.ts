import type { CustomDayjs } from "@/lib/dayjs";

export interface Log {
  createdAt: CustomDayjs
  createdBy: string
  updatedAt: CustomDayjs
  updatedBy: string
}
