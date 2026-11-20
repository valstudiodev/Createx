import { EventFilters } from "../model/event-filter.types";
import type { Event } from '@/entities/event/model/event-types';

export function filterEvents(
  events: Event[],
  filters: EventFilters,
): Event[] {
  const { search, category, sortBy } = filters;

  // 1. Search by event title
  const normalizedSearch = search.trim().toLowerCase();

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(normalizedSearch);

    const matchesCategory =
      category === 'all' || event.type === category;

    return matchesSearch && matchesCategory;
  });

  // 2. Sort events
  return [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.createdAt.localeCompare(a.createdAt);

      case 'oldest':
        return a.createdAt.localeCompare(b.createdAt);

      case 'date-asc':
        return a.date.localeCompare(b.date);

      case 'date-desc':
        return b.date.localeCompare(a.date);

      default:
        return 0;
    }
  });
}