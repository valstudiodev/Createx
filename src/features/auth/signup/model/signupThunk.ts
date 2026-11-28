import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIdTokenResult } from 'firebase/auth';


import type {
  AuthUser
} from '@/entities/user/model/user.types';
import { SignUpFormValues } from '../../model/auth.types';
import { signUp } from './useSignup';

export const signupThunk = createAsyncThunk<
  AuthUser,
  SignUpFormValues,
  { rejectValue: string }
>(
  'auth/signup',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const credential = await signUp(email, password);

      const tokenResult = await getIdTokenResult(credential.user);

      const user: AuthUser = {
        uid: credential.user.uid,
        email: credential.user.email,
        role: tokenResult.claims.admin === true ? 'admin' : 'user',
      };

      return user;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Registration failed';

      return rejectWithValue(message);
    }
  },
);