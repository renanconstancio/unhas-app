export type SchedulesDTOS = {
  id: string;
  year: string;
  children: {
    id: string;
    month: string;
    children: {
      id: string;
      day: string;
      time: string[];
    }[];
  }[];
};
