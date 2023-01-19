import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { TailSpin } from  'react-loader-spinner'
import { themoviedbApi } from 'themoviedbApi';
import { WrpReview, TitleAuthor, ContentStyle, Error } from "./Reviews.styled"

export const Reviews = () => {
    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (id===''){
          return
        }
  
        async function fetchFilms(){
          setIsLoading(true)
          try {
            const reviewsFilm = await themoviedbApi({ option: `/movie/${Number(id)}/reviews` });
            setReviews(prev => reviewsFilm.results)                
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false)
          }
        }
       
        fetchFilms()
      }, [id]);

    if (reviews.length === 0){
      return <Error>no reviews</Error>
    }

    if (reviews.length > 0){
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
    
          {reviews.map(({author, content}, idx) => <OneReview key={idx} num={idx} author={author} content={content}/>)}
        </>
      );       
    }    
}

const OneReview = ({num, author, content})=>{
    return <WrpReview>
        <TitleAuthor>{`${num + 1} - ${author}`}</TitleAuthor>
        <ContentStyle>{ content }</ContentStyle>
    </WrpReview>
}