import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import PrivateRoutes from "./PrivateRoutes";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "books", Component: Books },
      { path: "books/:id", Component: BookDetails },
      { path: "login", Component: AuthPage},
      {
        Component: PrivateRoutes,
        children: [
          { path: "profile", Component: ProfilePage },
          { path: "dashboard", Component: Dashboard}
        ],
      },
    ],
  },
]);
export default router;
