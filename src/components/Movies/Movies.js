import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TailSpin } from  'react-loader-spinner'
import { themoviedbApi } from 'themoviedbApi';
import { SearchBox } from 'components/SearchBox';
import { FilmList } from "components/FilmList";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("film") ?? "";
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (filmName===''){
      return
    }

    async function fetchFilms(){
      setIsLoading(true)
      try {
        const filmsByName = await themoviedbApi({ option: '/search/movie', nameFilm: `&query=${filmName}` });  

        if (filmsByName.results.length === 0){         
          toast('Sorry film not found')
        }

        setFilms(prev => filmsByName.results)                
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
   
    fetchFilms()
  }, [filmName]);

  const checkParams = (film) => {
    const nextParams = film !== "" ? { film } : {};
      setSearchParams(nextParams);
  };

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

      {films.length === 0 ? <SearchBox checkParams={checkParams}/> : <FilmList films={films}/>}      
      <ToastContainer autoClose={2000}/>
    </>
  );
};