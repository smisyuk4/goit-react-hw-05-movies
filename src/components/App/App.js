import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { Home } from 'Pages/Home';
import { Movies } from 'components/Movies';
import { MovieDetails } from 'components/MovieDetails';
import { Error } from 'Pages/Error';

export const App = () => {
  // return <TrendingList />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
        
         
      </Routes>
    </>
  );
};
