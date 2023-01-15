import { useEffect, useState } from 'react';
import { themoviedbApi } from 'themoviedbApi';
import { TrendingList } from 'components/TrendingList';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      const trandingFilms = themoviedbApi({ option: '/trending/movie/day' });
      trandingFilms.then(({ results }) => setFilms(results));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <TrendingList films={films} />
    </>
  );
};
