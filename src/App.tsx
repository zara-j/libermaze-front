import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Header from "./components/header/Header";
import { useState } from "react";
import BookDetails from "./pages/BookDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList searchQuery={searchQuery} />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;