import type { RouteObject } from "react-router-dom";
import { MoviePage } from "../components/pages";

const routes: RouteObject[] = [
  {
    path: "/movie-page",
    element: <MoviePage />,
  },
];

export default routes;
