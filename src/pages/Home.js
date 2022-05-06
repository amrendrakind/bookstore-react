import React from 'react';
import AddBook from '../componenets/Books/AddBook';
import BookList from '../componenets/Books/BookList';

const Home = () => {
  const books = [
    {
      id: '1',
      title: 'Power Shift',
      author: 'Aflin Toffler',
    },
  ];
  return (
    <>
      <BookList bookList={books} />
      <AddBook />
    </>
  );
};
export default Home;
