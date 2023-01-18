import { useParams } from "react-router-dom";

export const Cast = () => {
    const {id} = useParams()
    
    return <div>
            <p>image {id}</p>
            <p> actor</p>
        </div>
}