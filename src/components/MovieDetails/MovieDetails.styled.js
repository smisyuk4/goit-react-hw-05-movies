import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const FilmMainInfo = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
`
export const Poster = styled.img`
    display: block; 
    max-width: 100%; 
    height: auto; 
`

export const Desc = styled.div`
    max-width: 500px;
`

export const FilmTitle = styled.h2`
    margin-bottom: 10px;
`

export const DescItem = styled.p`
    margin-bottom: 10px;
`

export const DescTitle = styled.span`
    font-weight: 500;
    color: orange;
`

// *************************

export const FilmSecondInfo = styled.ul`
    display: flex;
    gap: 20px;
    padding: 5px;
    margin-bottom: 15px;
    background-color: pink;
`

export const NavLinkStyled = styled(NavLink)`
    display: block;
    padding: 5px;
    color: currentColor;
    text-decoration: none;  

    &:hover, &:focus {
        background-color: #dba1ab;
        border-radius: 10px;
    }

    &.active {
        font-weight: 500;
        border-radius: 10px;
    }
`

// ******************

export const SecondInfoWrap = styled.div`
    padding: 10px;
`