import { axios } from '.';

export const getAllJewelry = async () => {
  const { data } = await axios.get(
    'jewelry',
    {
      params: {
        limit: 10,
        offset: 0,
      },
    },
  );
  return data;
};

export const saveJewelry = async ({
  _id,
  name,
  category,
  material,
  colour,
  image_url,
  price,
}) => {
  await axios({
    method: _id ? 'put' : 'post',
    url: `jewelry/${_id || ''}`,
    data: { name, category, material, colour, image_url, price: Number(price) },
  });
};

export const deleteJewelry = async (_id) => {
  await axios.delete(`jewelry/${_id}`);
};