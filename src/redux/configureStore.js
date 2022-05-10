import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducerCategories, { checkStatus } from './categories/categories';
import reducerBook, { addBook, removeBook } from './books/books';

const rootReducer = combineReducers({ Books: reducerBook, Categories: reducerCategories });

const store = createStore(rootReducer);
store.dispatch(checkStatus());
store.dispatch(addBook());
store.dispatch(removeBook());
