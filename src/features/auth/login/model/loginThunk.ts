import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  getIdTokenResult,
} from 'firebase/auth';

import type {
  AuthUser
} from '@/entities/user/model/user.types';
import { auth } from '@/shared/config/firebase/firebase-config';
import { login } from './useLogin';
import { SignInFormValues } from '../../model/auth.types';

export const loginThunk = createAsyncThunk<
  AuthUser,
  SignInFormValues,
  { rejectValue: string }
>(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      // Set authentication persistence.
      await setPersistence(
        auth,
        rememberMe
          ? browserLocalPersistence
          : browserSessionPersistence,
      );

      // Authenticate user.
      const credential = await login(email, password);

      // Get Firebase custom claims.
      const tokenResult = await getIdTokenResult(credential.user);

      const isAdmin = tokenResult.claims.admin === true;

      // Return application user.
      const user: AuthUser = {
        uid: credential.user.uid,
        email: credential.user.email,
        role: isAdmin ? 'admin' : 'user',
      };

      return user;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Authentication failed';

      return rejectWithValue(message);
    }
  },
);