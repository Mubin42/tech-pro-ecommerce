import { TOKEN_NAME } from '../../lib/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthStateType = {
	token: string | null;
	loggedIn: boolean;
};

type LoginPayloadType = {
	token: string;
};

// Define the initial state
const initialState: AuthStateType = {
	token:
		typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) != null
			? localStorage.getItem(TOKEN_NAME)
			: null,
	loggedIn: typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) !== null,
};
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logout: (state): void => {
			localStorage.setItem(TOKEN_NAME, 'null');
			state.token = null;
			state.loggedIn = false;
			void (document.location.href = '/auth/login');
		},
		login: (state, action: PayloadAction<LoginPayloadType>): void => {
			const { token }: LoginPayloadType = action.payload;
			state.token = token;
			state.loggedIn = true;

			// set the token in the local storage
			localStorage.setItem(TOKEN_NAME, token);
			// set the agency id in the local storage

			void (document.location.href = '/');
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
