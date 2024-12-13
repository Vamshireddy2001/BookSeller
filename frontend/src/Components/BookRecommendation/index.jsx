import React,{ useState } from "react";
import './index.css';


const BookForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      genre: '',
      length: '',
      author: '',
    });
    
  function HandleSubmit(e){
     e.preventDefault();
     onSubmit(formData)
  }
  function HandleChange(e){
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return(
    <div className="formrecommendation">
        <h2>Book Recommendation</h2>
    <form onSubmit={HandleSubmit} className="">
      <div>
        <label>Favorite Genre:</label>
        <select name="genre" value={formData.genre} onChange={HandleChange}>
          <option value="">Select Genre</option>
          <option value="fiction">Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="fantasy">Fantasy</option>
          <option value="Computers">Computers</option>
          <option value="non-fiction">Non-fiction</option>
        </select>
      </div>
      <div>
        <label>Preferred Book Length:</label>
        <select name="length" value={formData.length} onChange={HandleChange}>
          <option value="">Select Length</option>
          <option value="short">Short (under 200 pages)</option>
          <option value="medium">Medium (200-400 pages)</option>
          <option value="long">Long (400+ pages)</option>
        </select>
      </div>
      <div>
        <label>Favorite Author:</label>
        <input type="text" name="author" value={formData.author} onChange={HandleChange} />
      </div>
      <button type="submit">Get Recommendations</button>
    </form>
    </div>)
    }

    export default BookForm;