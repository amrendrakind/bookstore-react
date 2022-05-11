import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function AddBook() {
  const [inputText, setInputText] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.name,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
    };

    dispatch(addBook(newBook));

    setInputText({
      title: '',
      author: '',
    });
  };
  return (
    <>
      <h3 className="heading">ADD NEW BOOK</h3>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          className="inputTextBox"
          placeholder="Book"
          value={inputText.title}
          name="title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          className="inputTextBox"
          placeholder="Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
          required
        />
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
