import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book(props) {
  const { book } = props;
  const { id, author, title } = book;

  return (

    <li key={id} className="book">
      {title}
      {' '}
      {author}

      <span>
        <button type="button">Remove</button>
      </span>
    </li>
  );
}

export default Book;

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book:
    PropTypes.objectOf(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
};
