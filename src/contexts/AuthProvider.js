import { createContext, useState, useCallback, useMemo, useEffect, useContext } from 'react';
import * as api from '../api';
import * as usersApi from '../api/users';
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext();

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

const useAuth = () => useContext(AuthContext);

function parseJwt(token) {
	if (!token) return {};
	const base64Url = token.split('.')[1];
	const payload = Buffer.from(base64Url, 'base64');
	const jsonPayload = payload.toString('ascii');
	return JSON.parse(jsonPayload);
}

function parseExp(exp) {
	if (!exp) return null;
	if (typeof exp !== 'number') exp = Number(exp);
	if (isNaN(exp)) return null;
	return new Date(exp * 1000);
}

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
	const [user, setUser] = useState(null);
	const [ready, setReady] = useState(false);

	const setSession = useCallback(async (token, user) => {
		const { exp, userId } = parseJwt(token);
		const expiry = parseExp(exp);
		const stillValid = expiry >= new Date();

		if (stillValid) {
			localStorage.setItem(JWT_TOKEN_KEY, token);
		} else {
			localStorage.removeItem(JWT_TOKEN_KEY);
			token = null;
		}

		api.setAuthToken(token);
		setToken(token);
		setReady(stillValid);

		if (!user && stillValid) {
			user = await usersApi.getUserById(userId);
		}
		setUser(user);
	}, []);

	const login = useCallback(async (email, password) => {
        setLoading(true);
        setError('');

		try {
			const { token, user } = await usersApi.login(email, password);
			setSession(token, user);
			return true;
		} catch (error) {
			console.error(error);
			setError('Login failed, please try again');
			return false;
		} finally {
			setLoading(false);
		}
	}, [setSession]);

	const logout = useCallback(() => {
		setSession(null, null);
	}, [setSession]);

	useEffect(() => {
		setSession(token);
	}, [token, setSession]);

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