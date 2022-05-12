import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  const { id, author, title } = book;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (

    <li key={id} className="book">
      {title}
      {' '}
      {author}

      <span>
        <button type="button" onClick={handleRemove}>Remove</button>
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
