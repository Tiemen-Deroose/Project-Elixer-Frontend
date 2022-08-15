import { axios } from '.';

export const login = async (email, password) => {
	const { data } = await axios.post(`users/login`, {
		email,
		password
	});
	return data;
};

export const register = async ({
	username,
	email,
	password,
}) => {
	const { data } = await axios.post(`users/register`, {
		username,
		email,
		password
	});
	return data;
};