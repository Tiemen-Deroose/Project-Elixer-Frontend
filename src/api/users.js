import axios from 'axios';
import config from '../config.json';

export const login = async (email, password) => {
	const {
		data
	} = await axios.post(`${config.base_url}users/login`, {
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
	const {
		data
	} = await axios.post(`${config.base_url}users/register`, {
		username,
		email,
		password
	});
	return data;
};