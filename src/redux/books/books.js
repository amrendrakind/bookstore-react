import { ADD_NEW_BOOK, REMOVE_BOOK } from '../types';

export function addBook(newBook) {
  return {
    type: ADD_NEW_BOOK,
    payload: newBook,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVE_BOOK,
    payload: bookId,
  };
}

export const reducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    default:
      return initialState;
  }
};
