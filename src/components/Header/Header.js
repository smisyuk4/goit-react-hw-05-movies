import { Container, HeaderStyled, NavList, NavLinkStyled } from './Header.styled';

import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <NavList>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </li>
        </NavList>
      </HeaderStyled>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};
