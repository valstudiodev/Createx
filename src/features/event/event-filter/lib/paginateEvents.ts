import type { Event } from '@/entities/event/model/event-types';

interface PaginateEventsParams {
  events: Event[];
  page: number;
  perPage: number;
}

interface PaginateEventsResult {
  events: Event[];
  totalPages: number;
  totalEvents: number;
}

export function paginateEvents({
  events,
  page,
  perPage,
}: PaginateEventsParams): PaginateEventsResult {
  const totalEvents = events.length;
  const totalPages = Math.ceil(totalEvents / perPage);

  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);

  const startIndex = (currentPage - 1) * perPage;

  return {
    events: events.slice(startIndex, startIndex + perPage),
    totalPages,
    totalEvents,
  };
}