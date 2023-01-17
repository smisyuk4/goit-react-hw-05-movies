import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { themoviedbApi } from 'themoviedbApi';
import defImageFilm from "../../images/defImageFilm.jpg"
import { FilmMainInfo, Poster, Desc, FilmTitle, DescItem, DescTitle } from "./MovieDetails.styled"

export const MovieDetails = ()=>{
    const {id} = useParams()
    const [film, setFilm] = useState({});
    const [imageLink, setImageLink] = useState(defImageFilm)
    const [genres, setGenres] = useState([])

    useEffect(() => {
      if (id===''){
        return
      }

      async function fetchFilms(){
        try {
          const filmById = await themoviedbApi({ option: `/movie/${Number(id)}` });
          const {poster_path, genres} = filmById

          setFilm(filmById)

          if(poster_path !==''){
            setImageLink(prev => `https://image.tmdb.org/t/p/w500${poster_path}`) 
          }
            
            setGenres(prev => genres.map(({name}) => name)) 
        }catch (error) {
          console.log(error);
        }
      }
     
      fetchFilms()
    }, [id]);

    const {original_title, vote_average, overview} = film 

    return <div>
            <FilmMainInfo>
              <Poster src={imageLink} alt={original_title} width="200" height="200"/> 
              <Desc>
                <FilmTitle>{original_title}</FilmTitle>
                <DescItem><DescTitle>Rating: </DescTitle>{vote_average}</DescItem>
                <DescItem><DescTitle>Overview: </DescTitle></DescItem>
                <DescItem>{overview}</DescItem>
                {genres.length > 0 &&  <DescItem><DescTitle>Genres: </DescTitle>{genres.join(', ')}</DescItem>}
              </Desc>
            </FilmMainInfo>
          </div>
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}