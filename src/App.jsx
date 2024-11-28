import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<EditBookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
