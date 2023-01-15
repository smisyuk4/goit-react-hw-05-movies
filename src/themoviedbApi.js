import axios from 'axios';

export const themoviedbApi = async valueObj => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2e329d861e790504d655e6d7175d4c52';

  const {
    option,
    nameFilm = '',
    lang = '&language=en',
    imageLang = '&include_image_language=en',
    region = '&region=en-US',
    page = 1,
  } = valueObj;

  const url = `${BASE_URL}${option}?api_key=${API_KEY}${nameFilm}${lang}${imageLang}${region}&page=${page}&include_adult=false`;

  return await axios.get(url).then(response => {
    return response.data;
  });
};
