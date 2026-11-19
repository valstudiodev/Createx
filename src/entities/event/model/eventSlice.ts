import { createSlice } from "@reduxjs/toolkit";
import { EventState } from "./event-types";
import { fetchEventByID, fetchEvents, fetchLatestEvents } from "./eventThunk";

const initialState: EventState = {
  events: [],
  event: null,
  eventsLoading: false,
  eventsError: null,
  eventLoading: false,
  eventError: null,
  latestEvents: [],
  latestEventsLoading: false,
  latestEventsError: null,
  latestEventsLoaded: false,
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.eventsLoading = true
        state.eventsError = null
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.eventsLoading = false
        state.eventsError = null
        state.events = action.payload
        state.latestEventsLoaded = true
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.eventsLoading = false
        state.eventsError = action.payload ?? 'Failed to fetch events.'
        state.latestEventsLoaded = true
      })


      .addCase(fetchEventByID.pending, (state) => {
        state.eventLoading = true
        state.eventError = null
        state.event = null
      })
      .addCase(fetchEventByID.fulfilled, (state, action) => {
        console.log('Fulfilled payload:', action.payload);
        state.eventLoading = false
        state.eventError = null
        state.event = action.payload
      })
      .addCase(fetchEventByID.rejected, (state, action) => {
        state.eventLoading = false
        state.eventError = action.payload ?? 'Failed to fetch event by ID.'
        state.event = null
      })

      .addCase(fetchLatestEvents.pending, (state) => {
        state.latestEventsLoading = true
        state.latestEventsError = null
      })
      .addCase(fetchLatestEvents.fulfilled, (state, action) => {
        state.latestEventsLoading = false
        state.latestEventsError = null
        state.latestEvents = action.payload
      })
      .addCase(fetchLatestEvents.rejected, (state, action) => {
        state.latestEventsLoading = false
        state.latestEventsError = action.payload ?? 'Failed to fetch latest events.'
      })
  }
})

export default eventSlice.reducer