import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { themoviedbApi } from 'themoviedbApi';
import defImageActor from "../../images/defImageActor.JPG"
import { CastList, ActorCard, ActorPhoto, ActorName} from "./Cast.styled"

export const Cast = () => {
    const {id} = useParams()
    const [cast, setCast] = useState([])    

    useEffect(() => {
        if (id===''){
          return
        }
  
        async function fetchFilms(){
          try {
            const castFilm = await themoviedbApi({ option: `/movie/${Number(id)}/credits` });
            console.log(castFilm.cast)
  
            setCast(prev => castFilm.cast)      
          }catch (error) {
            console.log(error);
          }
        }
       
        fetchFilms()
      }, [id]);

    if (cast.length > 0){
        return <CastList>
                    {cast.map(({name, profile_path}, idx) => <Actor key={idx} name={name} profile_path={profile_path}/>)}
                </CastList>
    }    
}

const Actor =({name, profile_path})=>{
    const imageLink = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defImageActor

    return <ActorCard>
                <ActorPhoto src={imageLink} alt={name} width="100" height="200" loading="lazy"/>               
                <ActorName>{name}</ActorName>
          </ActorCard>
}