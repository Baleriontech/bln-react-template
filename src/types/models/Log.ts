import type { Dayjs } from "dayjs";


export interface Log {
  createdAt: Dayjs
  createdBy: string
  updatedAt: Dayjs
  updatedBy: string
}
