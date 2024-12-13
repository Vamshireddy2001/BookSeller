import React, { useState } from "react";
import './index.css';

const AddNotes = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    bookName: '',
    genre: '',
    author: '',
    purchased: '',
    date: ''
  });

  function HandleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  function HandleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="formrecommendation">
      <h2>Adding Reminder is a Good Practice</h2>
      <form onSubmit={HandleSubmit} className="reminder-form">
        <div>
          <label>Book Name:</label>
          <input type="text" name="bookName" onChange={HandleChange} />
        </div>
        <div>
          <label>Genre:</label>
          <select name="genre" onChange={HandleChange}>
            <option value="">Select Genre</option>
            <option value="fiction">Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="computers">Computers</option>
            <option value="non-fiction">Non-fiction</option>
          </select>
        </div>
        <div>
          <label>Author Name:</label>
          <input type="text" name="author" onChange={HandleChange} />
        </div>
        <div>
          <label>Purchased:</label>
          <select name="purchased" onChange={HandleChange}>
            <option value="">Select Status</option>
            <option value="sale">Sale</option>
            <option value="not-in-sale">Not In Sale</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" onChange={HandleChange} />
        </div>
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  );
};

export default AddNotes;
