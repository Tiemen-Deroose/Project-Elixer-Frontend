import { axios } from '.';

export const getAllArt = async () => {
  const { data } = await axios.get(
    'art',
    {
      params: {
        limit: 10,
        offset: 0,
      },
    },
  );
  return data;
};

export const saveArt = async ({
  _id,
  title,
  material,
  medium,
  size,
  image_url,
  price,
}) => {
  await axios({
    method: _id ? 'put' : 'post',
    url: `art/${_id || ''}`,
    data: { title, material, medium, size, image_url, price: Number(price) },
  });
};

export const deleteArt = async (_id) => {
  await axios.delete(`art/${_id}`);
};