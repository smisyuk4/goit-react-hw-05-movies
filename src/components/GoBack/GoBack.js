import { useLocation } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { LinkStyled } from "./GoBack.styled"

export const GoBack = ()=>{
    const location = useLocation();
    const backLinkRef = location.state?.from ?? '/'

    return <LinkStyled to={backLinkRef}>
                <BiArrowBack/>
                Go back
            </LinkStyled>
}