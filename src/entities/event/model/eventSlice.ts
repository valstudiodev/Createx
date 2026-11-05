import { createSlice } from "@reduxjs/toolkit";
import { EventState } from "./event-types";
import { fetchEventByID, fetchEvents } from "./eventThunk";

const initialState: EventState = {
  events: [],
  event: null,
  eventsLoading: false,
  eventsError: null,
  eventLoading: false,
  eventError: null,
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
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.eventsLoading = false
        state.eventsError = action.payload ?? 'Failed to fetch events.'
      })


      .addCase(fetchEventByID.pending, (state) => {
        state.eventLoading = true
        state.eventsError = null
        state.event = null
      })
      .addCase(fetchEventByID.fulfilled, (state, action) => {
        state.eventLoading = false
        state.eventError = null
        state.event = action.payload
      })
      .addCase(fetchEventByID.rejected, (state, action) => {
        state.eventLoading = false
        state.eventError = action.payload ?? 'Failed to fetch event by ID.'
      })
  }
})

export default eventSlice.reducer