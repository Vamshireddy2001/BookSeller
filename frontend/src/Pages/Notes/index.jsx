import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './index.css';
import { fetchBooks, fetchBooksRecommendation } from '../../Api/googlebooks';
import BookForm from '../../Components/BookRecommendation';
import AddNotes from '../../Components/AddNotes';
import { DeleteNote, FetchNotes, NotesAPI } from '../../Api/notes';
import Cookies from 'js-cookie';
function Notes() {
  const [reminder, setReminder] = useState([]);
  const [message, setMessage] = useState([]);
  const handleSubmit = async (formData) => {
    try {
      // Clean up the author field (trim any leading/trailing spaces or tabs)
  
      const updatedFormData = {
        ...formData,
        id: Cookies.get('id'), // Replace this with the actual id you want to append
      };
      console.log('Form Data:', formData);

      
      const response = await NotesAPI(updatedFormData);
       if(response)
       {
        alert(response.message);
        setMessage(response.message)
       }
  
    } catch (error) {

      console.error('Error fetching books:', error);
    }
  };
  
  const handleDelete=async(id)=>{
    console.log(id);
    const deleted= await DeleteNote(id);
    if(deleted)
    {
      alert(deleted.message);
      window.location.reload();
    }

  }

  const fetchReminder=async()=>{
    const fetchData=await FetchNotes(Cookies.get('id'));
    if(fetchData && fetchData.data)
    {
      console.log(fetchData.data)
      setReminder(fetchData.data)
    }
  }
  useEffect(()=>fetchReminder,[]);
  return (
    <div className='SellerContainer'>
      <Header prop={{"searchRequired":true}}/>
      <h3>Add Reminder</h3>
      <AddNotes onSubmit={handleSubmit} />
      <div className='recommendation-list'>
      </div>
      <div className='notes-display'>
        <h3>Your Notes</h3>
        {reminder.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          <ul>
            {reminder.map((note, index) => (
              <li key={index} className='note-item'>
                <strong>Book Name:</strong> {note.bookname} <br />
                <strong>Author:</strong> {note.author} <br />
                <strong>Genre:</strong> {note.genre} <br />
                <strong>Purchased:</strong> {note.purchased} <br />
                <strong>Date:</strong> {note.date} <br />
                <button style={{backgroundColor:"transparent",border:"1px solid black"}} onClick={()=>handleDelete(note._id)}>Delete Note</button>
              </li>
            ))}
          </ul>
        )}
        <label>{message}</label>
      </div>
      <Footer />
    </div>
  );
}

export default Notes;
