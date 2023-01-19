import { useForm } from 'react-hook-form';
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdSearch } from 'react-icons/io';
import { Label, SearchInput, Error, ButtonFind } from "./SearchBox.styled"
import { themoviedbApi } from 'themoviedbApi';

const VALIDATION_SCHEMA = yup
  .object({
    film: yup.string().min(3).max(20),
  })
  .required();

export const SearchBox = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("film") ?? "";
  console.log(filmName)


  // const [filmByName, setFilmByName] = useState()
  useEffect(() => {
    if (filmName===''){
      return
    }

    async function fetchFilms(){
      // setIsLoading(true)
      try {
        const filmsByName = await themoviedbApi({ option: '/search/movie', nameFilm: `&query=${filmName}` });
        console.log(filmsByName.results)

        // setReviews(prev => reviewsFilm.results)                
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false)
      }
    }
   
    fetchFilms()
  }, [filmName]);

  const onSubmit = ({film}) => {
    console.log(film)
    const nextParams = film !== "" ? { film } : {};
      setSearchParams(nextParams);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Label>
        <SearchInput {...register('film', { required: true })}
              title="Search film"
              placeholder="Search film"/>

              <Error>{errors.film?.message}</Error>
              <ButtonFind type='submit'><IoMdSearch size={20}/></ButtonFind>
        </Label>      
    </form>
  );
};

SearchBox.propTypes = {};
