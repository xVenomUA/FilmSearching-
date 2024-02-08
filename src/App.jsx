import { Suspense, lazy } from "react";
import { AppBar } from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import MovieDetailsPage from "./pages/MovieDetailsPage";
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFound = lazy(() => import("./pages/NotFound"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
export const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
