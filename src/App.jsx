import { Suspense } from "react";
import { AppBar } from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { Loader } from "./components/Loader/Loader";
import NotFound from "./pages/NotFound";
import  MovieDetailsPage  from "./pages/MovieDetailsPage";

export const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<h1>Cast</h1>} />
            <Route path="reviews" element={<h1>Reviews</h1>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
