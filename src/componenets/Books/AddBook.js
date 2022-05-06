import React, { useState } from 'react';

function AddBook() {
  const [inputText, setInputText] = useState({ title: '', author: '' });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.name,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
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
        />
        <input
          type="text"
          className="inputTextBox"
          placeholder="Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
        />
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
}

export default AddBook;
