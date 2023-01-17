import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'Pages/Home';
import { Movies } from 'components/Movies';
import { MovieDetails } from 'components/MovieDetails';
import { Cast } from "components/Cast"
import { Reviews } from "components/Reviews"
import { Error } from 'Pages/Error';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>         
      </Routes>
    </>
  );
};
