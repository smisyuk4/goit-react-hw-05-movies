import { useEffect, useState } from 'react';
import { TailSpin } from  'react-loader-spinner'
import { themoviedbApi } from 'themoviedbApi';
import { FilmList } from 'components/FilmList';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    try {
      const trandingFilms = themoviedbApi({ option: '/trending/movie/day' });
      trandingFilms.then(({ results }) => setFilms(results));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, []);
  return (
    <>
      {isLoading && <TailSpin
        height="80"
        width="80"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperClass="loader"
        visible={true}
      />}

      <FilmList films={films} />
    </>
  );
};
