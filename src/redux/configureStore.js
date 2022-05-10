import { configureStore } from '@reduxjs/toolkit';
import reducerCategories, { checkStatus } from './categories/categories';
import reducerBook, { addBook, removeBook } from './books/books';

const store = configureStore({
  reducer: {
    Books: reducerBook,
    Categories: reducerCategories,
  },
});

store.dispatch(checkStatus());
store.dispatch(addBook());
store.dispatch(removeBook());
