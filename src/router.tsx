
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "books", Component: Books },
      { path: "books/:id", Component: BookDetails },
    ],
  },
]);
export default router;
