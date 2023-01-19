import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FilmListStyled = styled.ul`  
    display: inline-block;  
    margin-left: 25px;
`

export const Film = styled.li`
    &:not(:last-child){
        margin-bottom: 5px;
    }
`

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;        
    text-decoration: none;
    color: currentColor;

    svg {
        margin-right: 5px;
    }

    &:hover, &:focus {
        color: red;
    }
`