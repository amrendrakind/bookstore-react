import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BookList;
