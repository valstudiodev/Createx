import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from './useLogout';


export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout()
      return
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Logout failed',
      );
    }
  },
);