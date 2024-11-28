import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBook } from '../redux/booksSlice';

const EditBookForm = () => {
  const { id } = useParams(); // Get the ID from the URL
  const books = useSelector((state) => state.books);
  const bookToEdit = books.find((book) => book.id.toString() === id);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: bookToEdit.id, updatedBook: { title, author } }));
    navigate('/');
  };

  if (!bookToEdit) {
    return <p className="text-center mt-5">Book not found!</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit Book</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
