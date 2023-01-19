import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { SiCinema4D } from "react-icons/si";
import { FilmListStyled, Film, NavLinkStyled } from "./FilmList.styled"

export const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <FilmListStyled>
      {films.map(film => (
        <Film key={film.id}>
          <NavLinkStyled to={`/movies/${film.id}`} state={{ from: location }}>
            <SiCinema4D/>
            {film.title}
          </NavLinkStyled>
        </Film>
      ))}
    </FilmListStyled>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};
