import { EventFilters, EventsPerPage } from "./event-filter.types";

export const DEFAULT_EVENTS_PER_PAGE: EventsPerPage = 9;

export const EVENTS_PER_PAGE_OPTIONS: EventsPerPage[] = [
  6,
  9,
  12,
  18,
];

export const DEFAULT_EVENT_FILTERS: EventFilters = {
  category: 'all',
  sortBy: 'newest',
  perPage: DEFAULT_EVENTS_PER_PAGE,
  search: '',
  viewMode: 'grid',
};