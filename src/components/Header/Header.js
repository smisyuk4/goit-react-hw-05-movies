import { Container, HeaderStyled, NavList, NavLinkStyled } from './Header.styled';

import { Outlet } from 'react-router-dom';

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

      <main>
        <Outlet />
      </main>
    </Container>
  );
};
