import { ReactNode } from "react";

export type EventFormat = 'online' | 'offline'

export type EventCardVariant = 'primary' | 'featured'

export type EventType =
  | 'master-class'
  | 'lecture'
  | 'workshop'

export interface EventCard {
  event: Event;
  className?: string;
  variant?: EventCardVariant;
  actions?: ReactNode;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat;
  type: EventType;
  teacherId: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface EventDetailsInfo {
  about: AccordionItem[];
  price: number;
  information?: string[];
}

export interface EventFullDetails extends Event {
  details: EventDetailsInfo;
}

export interface CreateEventPayload {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat;
  type: EventType;
  teacherId: string;
  details: EventDetailsInfo;
}

export interface EventState {
  events: EventFullDetails[],
  event: EventFullDetails | null,
  eventsLoading: boolean,
  eventLoading: boolean,
  eventsError: string | null,
  eventError: string | null,
}

