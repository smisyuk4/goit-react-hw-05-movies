import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const FilmMainInfo = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    max-width: 800px;  
`
export const Poster = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;    

    @media screen and (min-width: 425px) {
        height: 300px;
    }

    @media screen and (min-width: 768px) {
        height: 400px;
    }
`

export const Desc = styled.div`
    max-width: 500px;
`

export const FilmTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 12px;

    @media screen and (min-width: 320px) {
        font-size: 18px;
    }
`

export const DescItem = styled.p`
    margin-bottom: 10px;
    font-size: 10px;

    @media screen and (min-width: 320px) {
        font-size: 16px;
    }
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
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
        text-decoration: underline;
        font-weight: 500;
        border-radius: 10px;
    }
`

// ******************

export const SecondInfoWrap = styled.div`
    padding: 10px;
`