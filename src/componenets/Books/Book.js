import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../../redux/types';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  const { id, author, title } = book;

  const removeBook = (id) => ({
    type: REMOVE_BOOK,
    payload: id,
  });

  const handleDispatch = (id) => {
    dispatch(removeBook(id));
  };

  return (

    <li key={id} className="book">
      {title}
      {' '}
      {author}

      <span>
        <button type="button" onClick={handleDispatch}>Remove</button>
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
