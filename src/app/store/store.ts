import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "@/entities/course/model/courseSlice";
import postReducer from "@/entities/post/model/postSlice";
import eventReducer from "@/entities/event/model/eventSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    posts: postReducer,
    events: eventReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;