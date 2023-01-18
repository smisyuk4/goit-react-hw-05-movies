import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { themoviedbApi } from 'themoviedbApi';
import { WrpReview, TitleAuthor, ContentStyle } from "./Reviews.styled"

export const Reviews = () => {
    const {id} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if (id===''){
          return
        }
  
        async function fetchFilms(){
          try {
            const reviewsFilm = await themoviedbApi({ option: `/movie/${Number(id)}/reviews` });
            console.log(reviewsFilm.results)
  
            setReviews(prev => reviewsFilm.results)                
          }catch (error) {
            console.log(error);
          }
        }
       
        fetchFilms()
      }, [id]);

    if (reviews.length === 0){
    return
    }

    if (reviews.length > 0){
    return reviews.map(({author, content}, idx) => <OneReview key={idx} num={idx} author={author} content={content}/>)
    }    
}

const OneReview = ({num, author, content})=>{
    return <WrpReview>
        <TitleAuthor>{`${num + 1} - ${author}`}</TitleAuthor>
        <ContentStyle>{ content }</ContentStyle>
    </WrpReview>
}