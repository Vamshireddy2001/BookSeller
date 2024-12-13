import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './index.css';
import { fetchBooks, fetchBooksRecommendation } from '../../Api/googlebooks';
import BookForm from '../../Components/BookRecommendation';

function BookRecommendation() {
  const [bookRecommendation, setBookRecommendation] = useState([]);

  const handleSubmit = async (formData) => {
    try {
      // Clean up the author field (trim any leading/trailing spaces or tabs)
      const cleanedAuthor = formData.author.trim();
  
      console.log('Form Data:', formData);
  
      const response = await fetchBooksRecommendation(formData.genre, cleanedAuthor);
  
      // Log the entire API response to inspect the data
      console.log('API Response:', response);
  
      if (response && response.items) {
        const filteredBooks = response.items.filter((book) => {
          const genre = book.volumeInfo.categories?.[0] || ''; // genre from the API
          const pageCount = book.volumeInfo.pageCount || 0;    // page count from the API
          const authors = book.volumeInfo.authors || [];       // authors from the API
  
          // Log the data for debugging
          console.log('Checking book:', book.volumeInfo.title, genre, pageCount, authors);
  
          // Compare genre and author correctly
          console.log('Comparing genre:', genre.toLowerCase(), formData.genre.toLowerCase());
          console.log('Comparing author:', authors, cleanedAuthor);
  
          // Filter books based on formData values
          return (
            // Check if the genre matches
            (formData.genre
              ? genre.toLowerCase().includes(formData.genre.toLowerCase())
              : true) &&
  
            // Check if the length matches
            (formData.length
              ? pageCount <=
                (formData.length === 'short' ? 200 :
                formData.length === 'medium' ? 400 : 1000)
              : true) &&
  
            // Check if the author matches
            (cleanedAuthor
              ? authors.some((author) => author.toLowerCase().includes(cleanedAuthor.toLowerCase()))
              : true)
          );
        });
  
        // Log filtered books or update state with them
        console.log('Filtered Books:', filteredBooks);
  
        if (filteredBooks.length > 0) {
          setBookRecommendation(filteredBooks); // Update UI with filtered books
        } else {
          console.log('No books match your criteria');
        }
      } else {
        console.log('No books found in the response');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  

  return (
    <div className='SellerContainer'>
      <Header prop={{"searchRequired":true}}/>
      <h3>BEST SELLER</h3>
      <BookForm onSubmit={handleSubmit} />
      
      <div className='recommendation-list'>
        <h4>Recommended Books:</h4>
        {bookRecommendation.length > 0 ? (
          <ul>
            {bookRecommendation.map((book) => (
              <li key={book.id}>
                
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                )}
                <h5>{book.volumeInfo.title}</h5>
                <p>Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                <p>Pages: {book.volumeInfo.pageCount || 'N/A'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books match your criteria. Try adjusting the filters.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default BookRecommendation;
