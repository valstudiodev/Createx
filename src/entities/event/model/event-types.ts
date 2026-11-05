export type EventFormat = 'online' | 'offline'

export type EventType =
  | 'master-class'
  | 'lecture'
  | 'workshop'

export interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat;
  type: EventType;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface EventPreview extends Event { }

export interface EventDetails extends Event {
  about: AccordionItem[];
  price?: number;
  information?: string[];
}

export interface EventFullDetails extends Event, EventDetails { }

export interface CreateEventPayload {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  format: EventFormat;
  type: EventType;
  about: AccordionItem[];
  price?: number;
  information?: string[];
}

export interface EventState {
  events: EventFullDetails[],
  event: EventFullDetails | null,
  eventsLoading: boolean,
  eventLoading: boolean,
  eventsError: string | null,
  eventError: string | null,
}

