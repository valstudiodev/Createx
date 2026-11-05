import { RootState } from "@/app/store/store";


export const selectEvenets = (state: RootState) => state.events.events
export const selectEvent = (state: RootState) => state.events.event
export const selectEventsLoading = (state: RootState) => state.events.eventsLoading
export const selectEventLoading = (state: RootState) => state.events.eventLoading
export const selectEventsError = (state: RootState) => state.events.eventsError
export const selectEventError = (state: RootState) => state.events.eventError