import { configureStore } from '@reduxjs/toolkit';
import { checkStatus, reducerCategories } from './categories/categories';
import { addBook, removeBook, reducerBook } from './books/books';

const store = configureStore({
  reducer: {
    Books: reducerBook,
    Categories: reducerCategories,
  },
});

store.dispatch(checkStatus());
store.dispatch(addBook());
store.dispatch(removeBook());
