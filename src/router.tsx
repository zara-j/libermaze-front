// import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import Header from "./components/header/Header";
// import { useState } from "react";
// import BookDetails from "./pages/BookDetails";
// import Books from "./pages/Books";

//     <div className="App">
//       <BrowserRouter>
//         <Header setSearchQuery={setSearchQuery} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<Books searchQuery={searchQuery} />} />
//           <Route path="/books/:id" element={<BookDetails />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

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
