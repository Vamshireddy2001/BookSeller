import { useEffect, useState } from 'react';
import { fetchBooks } from '../../Api/googlebooks';
import './index.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';
import ImageGalleryGoogle from '../../Components/ImageGallery/ImageGalleryGoogle';
function GoogleBooks()
{

    const [generalBooks,SetGeneralBooks]=useState();

    const [codingBooks,SetCodingBooks]=useState();
  const fetchGeneral=async ()=>{
        const response=await fetchBooks("General Books")
        if(response)
        {
            
           SetGeneralBooks(response.items.filter(book => {
            const hasImage = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
            const hasPrice = book.saleInfo && book.saleInfo.listPrice;
            return hasImage && hasPrice;
          }));

           console.log("work",response.items);
        }
  }
  const fetchCoding=async ()=>{
    const response=await fetchBooks("Coding Books")
    if(response)
    {
        
       SetCodingBooks(response.items.filter(book => {
        const hasImage = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
        const hasPrice = book.saleInfo && book.saleInfo.listPrice;
        return hasImage && hasPrice;
      }));

       console.log("work",response.items);
    }
  }
  useEffect(()=>fetchGeneral,[]);
  useEffect(()=>fetchCoding,[]);
  return (
  <div className='GoogleSellerContainer'>
    <Header prop={{"searchRequired":true}}/>
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
  <h3 style={{marginLeft:"30px"}}>Coding Books</h3>
  <div className='subcontainergoogle'>
  { 
   codingBooks?.map((element,index)=>(     
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
</div>)
}

export default GoogleBooks;