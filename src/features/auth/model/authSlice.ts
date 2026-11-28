import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthState, AuthStatus } from "./auth.types"
import { AuthUser } from "@/entities/user/model/user.types"
import { loginThunk } from "../login/model/loginThunk"
import { signupThunk } from "../signup/model/signupThunk"
import { logoutThunk } from "../logout/model/logoutThunk"

const initialState: AuthState = {
  user: null,
  initialized: false,
  status: 'idle',
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload
      state.status = action.payload
        ? 'authenticated'
        : 'unauthenticated'
      state.error = null
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload
    },
    setStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'authenticated';
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'unauthenticated';
        state.error = action.payload ?? 'Login failed.';
      })

      .addCase(signupThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.status = 'authenticated'
        state.user = action.payload
        state.error = null
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.status = 'unauthenticated'
        state.error = action.payload ?? 'Sign Up failed.'
      })

      .addCase(logoutThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.status = 'unauthenticated';
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.payload ?? 'Logout failed';
        state.status = 'authenticated';
      })
  },
})

export const { setUser, setInitialized, setStatus, setError } = authSlice.actions

export default authSlice.reducer