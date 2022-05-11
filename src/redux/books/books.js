import { v4 as uuidv4 } from 'uuid';
import { ADD_NEW_BOOK, REMOVE_BOOK } from '../types';

const defualtBooks = [
  {
    id: uuidv4(),
    title: 'Power Shift',
    author: 'Alvin Toffler',
  },
  {
    id: uuidv4(),
    title: 'My Journey',
    author: 'Dr. A.P.J. Abdul Kalam',
  },
  {
    id: uuidv4(),
    title: 'Making of New India',
    author: 'Dr. Bibek Debroy',
  },
  {
    id: uuidv4(),
    title: 'Whispers of Time',
    author: 'Dr. Krishna Saksena',
  },
  {
    id: uuidv4(),
    title: 'Godan',
    author: 'Premchand',
  },
];

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

export default function reducerBook(initialState = defualtBooks, action) {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    default:
      return initialState;
  }
}
