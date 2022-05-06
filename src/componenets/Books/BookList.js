import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  const { bookList } = props;

  return (
    <ul>
      {bookList.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BookList;

BookList.defaultProps = {
  bookList: [],
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.objectOf(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
  ),
};
