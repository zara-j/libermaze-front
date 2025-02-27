import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList searchQuery={searchQuery} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;