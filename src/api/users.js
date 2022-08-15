import { axios } from '.';

export const login = async (email, password) => {
  const { data } = await axios.post('users/login', {
    email,
    password,
  });
  return data;
};

export const register = async ({
  username,
  email,
  password,
}) => {
  const { data } = await axios.post('users/register', {
    username,
    email,
    password,
  });
  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`users/${id}`);
  return data;
};

export const favourite = async ({ userId, itemId, isFavourited }) => {
  await axios({
    method: isFavourited ? 'delete' : 'put',
    url: `users/favourite/${userId || ''}`,
    data: { itemId },
  });
};