import { createAsyncThunk } from "@reduxjs/toolkit";
import { EventFullDetails } from "./event-types";
import { Event } from '@/entities/event/model/event-types'
import { getEventByID, getEvents, getLatestEvents } from "../api/eventService";


export const fetchEvents = createAsyncThunk<EventFullDetails[], void, { rejectValue: string }>(
  'events/fetchEvents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getEvents()
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch events.')
    }
  }
)

export const fetchEventByID = createAsyncThunk<EventFullDetails | null, { eventId: string }, { rejectValue: string }>(
  'events/fetchEventById',
  async ({ eventId }, thunkApi) => {
    try {
      const response = await getEventByID(eventId)
      return response
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message)
      }
      return thunkApi.rejectWithValue('Failed to fetch event by ID.')
    }
  }
)

export const fetchLatestEvents = createAsyncThunk<Event[], void, { rejectValue: string }>(
  'events/fetchLatestEvents',
  async (_, { rejectWithValue }) => {
    try {
      return await getLatestEvents()
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Failed to fetch latest events.')
    }
  }
)