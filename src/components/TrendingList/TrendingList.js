import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { SiCinema4D } from "react-icons/si";
import { FilmList, Film, NavLinkStyled } from "./TrendingList.styled"

export const TrendingList = ({ films }) => {
  const location = useLocation();

  return (
    <FilmList>
      {films.map(film => (
        <Film key={film.id}>
          <NavLinkStyled to={`/movies/${film.id}`} state={{ from: location }}>
            <SiCinema4D/>
            {film.title}
          </NavLinkStyled>
        </Film>
      ))}
    </FilmList>
  );
};

TrendingList.propTypes = {
  films: PropTypes.array.isRequired,
};
