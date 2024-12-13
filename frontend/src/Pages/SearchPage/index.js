import { useLocation, useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ImageGalleryGoogle from '../../Components/ImageGallery/ImageGalleryGoogle';
import './index.css';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import { fetchBooks } from '../../Api/googlebooks';

function SearchPage()
{
    const [generalBooks,SetGeneralBooks]=useState();

    const location=useLocation()

    const query=new URLSearchParams(location.search)

    const fetchBooksData=async ()=>{
        const response=await fetchBooks(query.get('value'))
        if(response)
        {
           SetGeneralBooks(response.items.filter(book => {
            const hasImage = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
            const hasPrice = book.saleInfo && book.saleInfo.listPrice;
            return hasImage && hasPrice;
          }));

           console.log("work",query);
        }
  }

  useEffect(() => {
    const searchValue = query.get('value');
    if (searchValue) {
      fetchBooksData(searchValue);
    }
  }, [location.search]); 


    return (
        <div className='GoogleSellerContainer'>
          <Header/>
          <h3 style={{marginLeft:"30px"}}>General Books</h3>
        <div className='subcontainergoogle'>
        { 
         generalBooks?.map((element,index)=>(     
            <>
              <div className='flex gallery'>
               <ImageGalleryGoogle prop={{"title":element?.volumeInfo?.title,"img":element?.volumeInfo?.imageLinks?.smallThumbnail?element?.volumeInfo?.imageLinks?.smallThumbnail:element?.volumeInfo?.imageLinks?.thumbnail,
                  "price":`$ ${element?.saleInfo?.retailPrice?.amount}`
               }} key={index}/>
             </div>  
            </> 
                 
        ))} 
        </div>
        <Footer/>
      </div>);
}

export default SearchPage;