import { createContext, useState, useCallback, useMemo, useEffect, useContext } from 'react';
import * as api from '../api';
import * as usersApi from '../api/users';
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

export const useSession = () => {
	const { token, user, ready, loading, error, hasRole } = useAuth();
	return { token, user, ready, error, loading, isAuthed: Boolean(token), hasRole };
};

export const useLogin = () => {
	const { login } = useAuth();
	return login;
};

export const useLogout = () => {
	const { logout } = useAuth();
	return logout;
};

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
	const [user, setUser] = useState(null);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(Boolean(token));
		api.setAuthToken(token);
		if (token)
			localStorage.setItem(JWT_TOKEN_KEY, token);
		else
			localStorage.removeItem(JWT_TOKEN_KEY)
	}, [token]);

	const login = useCallback(async (email, password) => {
        setLoading(true);
        setError('');

		try {
			const { token, user } = await usersApi.login(email, password);
			setToken(token);
			setUser(user);
			return true;
		} catch (error) {
			console.error(error);
			setError('Login failed, please try again');
			return false;
		} finally {
			setLoading(false);
		}
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
	}, []);

	const value = useMemo(() => ({
		token,
		user,
		ready,
		error,
		loading,
		login,
		logout,
	}), [token, user, ready, error, loading, login, logout]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};