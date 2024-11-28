import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/booksSlice';
import { Link } from 'react-router-dom';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center">Book List</h2>
      <div className="row">
        {books.length ? (
          books.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link to={`/edit/${book.id}`} className="btn btn-primary btn-sm">
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(deleteBook(book.id))}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No books available. Add a book!</p>
        )}
      </div>
    </div>
  );
};

export default Book;
