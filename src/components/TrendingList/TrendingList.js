import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrendingList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

TrendingList.propTypes = {
  films: PropTypes.array.isRequired,
};
