import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { themoviedbApi } from 'themoviedbApi';

export const MovieDetails = ()=>{
    const {id} = useParams()
    console.log(id);
    const [film, setFilm] = useState({});

    useEffect(() => {
      try {
        const trandingFilms = themoviedbApi({ option: `/movie/${Number(id)}` });
        trandingFilms.then( result => {
            console.log(Number(id));
            console.log(result);
            setFilm(result)
        });
        
      } catch (error) {
        console.log(error);
      }
    }, [id]);

    const {poster_path, original_title, vote_average, overview} = film //genres

    const posterLink = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : null
    // const genresString = genres ? genres.map((name) => name) : null
 

    return <div>
        <img style={{display: "block", maxWidth: '100%', height: 'auto'}} src={posterLink} alt={original_title} width="200" height="200"/> 
        <h2>{original_title}</h2>
        <p>Rating {vote_average} </p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        {/* <p>{genresString}</p>  */}
    </div>
}

// .join(', ')