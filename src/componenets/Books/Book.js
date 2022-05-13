import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, author, title, category,
  } = book;

  const handleRemove = () => {
    dispatch(removeBooks(id));
  };

  return (

    <li key={id}>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <div className="book-category">
              {category}
            </div>

            <div className="book-title">
              {title}
            </div>

            <div className="book-author">
              {author}
            </div>

            <div className="container-buttons">
              <button className="action-button" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button" onClick={handleRemove}>Remove</button>
              <div className="vertical-divider" />
              <button className="action-button" type="button">Edit</button>
            </div>
          </div>

        </div>
      </div>
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
