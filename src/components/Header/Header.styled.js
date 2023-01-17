import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`

export const HeaderStyled = styled.header`
    padding: 10px;
    margin-bottom: 10px;
    background-color: pink;
`

export const NavList = styled.ul`
    display: flex;
    gap: 20px;

`
export const NavLinkStyled = styled(NavLink)`
    display: block;
    padding: 5px;
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