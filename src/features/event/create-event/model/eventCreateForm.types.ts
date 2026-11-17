import { AccordionItem, EventFormat, EventType } from "@/entities/event/model/event-types";


export interface EventFormValues {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat | '';
  type: EventType | '';
  teacherId: string;
  about: AccordionItem[];
  price?: number;
  information?: string[];
}

export interface EventFormErrors {
  id?: string;
  title?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  format?: string;
  teacherId?: string;
  type?: string;
  about?: string;
  price?: string;
  information?: string;
}