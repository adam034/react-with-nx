import axios from 'axios';
export const getBooks = async () => {
  const books = await axios.get(
    'https://masak-apa.tomorisakura.vercel.app/api/recipes'
  );
  return [
    {
      id: 1,
      title: 'Book One',
      author: 'Adam',
    },
  ];
};
