import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Container, HeaderStyled, NavList, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <NavList>
          <li>
            <NavLinkStyled to="/" aria-label="home">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/movies" aria-label="movies">Movies</NavLinkStyled>
          </li>
        </NavList>
      </HeaderStyled>

      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      
    </Container>
  );
};
