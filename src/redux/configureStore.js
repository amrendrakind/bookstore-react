import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducerCategories from './categories/categories';
import reducerBook from './books/books';

const rootReducer = combineReducers({ Books: reducerBook, Categories: reducerCategories });

const store = createStore(rootReducer);

export default store;
