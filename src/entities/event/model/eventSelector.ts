import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";
import { Event } from "./event-types";


export const selectEvents = (state: RootState) => state.events.events
export const selectEvent = (state: RootState) => state.events.event
export const selectEventsLoading = (state: RootState) => state.events.eventsLoading
export const selectEventLoading = (state: RootState) => state.events.eventLoading
export const selectEventsError = (state: RootState) => state.events.eventsError
export const selectEventError = (state: RootState) => state.events.eventError
export const selectLatestEvents = (state: RootState) => state.events.latestEvents
export const selectLatestEventsLoading = (state: RootState) => state.events.latestEventsLoading
export const selectLatestEventsError = (state: RootState) => state.events.latestEventsError
export const selectLatestEventsLoaded = (state: RootState) => state.events.latestEventsLoaded

export const selectEventsRecommended = createSelector(
  [
    selectEvents,
    (_state: RootState, currentEventId: string) => currentEventId
  ],
  (events, currentEventId) => {
    const currentEvent = events.find(
      (event) => event.id === currentEventId
    )

    if (!currentEvent) return []

    const sortByDate = (a: Event, b: Event): number => b.date.localeCompare(a.date)

    const availableEvents = events.filter(
      (event) => event.id !== currentEvent.id
    )

    const sameTypeEvent = events
      .filter(
        (event) =>
          event.id !== currentEventId &&
          event.type === currentEvent.type
      ).sort(sortByDate)

    const otherCategoriesEvents = availableEvents
      .filter(
        (event) =>
          event.id !== currentEventId &&
          event.type !== currentEvent.type
      ).sort(sortByDate)

    return [...sameTypeEvent, ...otherCategoriesEvents].slice(0, 4)
  }
)