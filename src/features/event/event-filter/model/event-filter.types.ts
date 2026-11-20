import { EventType } from "@/entities/event/model/event-types";

export type EventSortOption =
  | 'newest'
  | 'oldest'
  | 'date-asc'
  | 'date-desc'

export type EventCategory = EventType | 'all'

export type EventsPerPage = 3 | 6 | 9 | 12 | 18

export type EventViewMode = 'grid' | 'list'

export interface EventFilters {
  category: EventType | 'all';
  sortBy: EventSortOption;
  perPage: EventsPerPage;
  search: string;
  viewMode: EventViewMode;
}