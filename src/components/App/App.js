import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("Pages/Home"));
const Movies = lazy(() => import("components/Movies"));
const MovieDetails = lazy(() => import("components/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));
const Error = lazy(() => import("Pages/Error"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};
