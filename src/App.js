import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './pages/bookList/BookList';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/signin/SignIn';
import Header from './components/headers/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

