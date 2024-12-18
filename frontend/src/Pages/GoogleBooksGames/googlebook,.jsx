import { useEffect, useState } from 'react';
import { fetchBooks } from '../../Api/googlebooks';
import './index.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';
import ImageGalleryGoogle from '../../Components/ImageGallery/ImageGalleryGoogle';
import AlertBox from '../../Components/AlertComponent';

function GoogleBooksGame()
{

    const [games,SetGamesBooks]=useState();

    const [puzzles,SetPuzzlesBooks]=useState();
    const [showAlertBox,setAlertBox]=useState();

       const [reponseToAlertBox,SetResponseToAlertBox]=useState(false);

       const handleAlertBox=(response)=>{
         setAlertBox(response)
     }
     const handleAlert=(response)=>
       {
         SetResponseToAlertBox(response)
         setAlertBox(false);
       }

  const fetchGeneral=async ()=>{
        const response=await fetchBooks("Gaming")
        if(response)
        {
            
          SetGamesBooks(response.items.filter(book => {
            const hasImage = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
            const hasPrice = book.saleInfo && book.saleInfo.listPrice;
            return hasImage && hasPrice;
          }));

           console.log("work",response.items);
        }
  }
  const fetchCoding=async ()=>{
    const response=await fetchBooks("Puzzling")
    if(response)
    {
        
      SetPuzzlesBooks(response.items.filter(book => {
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
    <h3 style={{marginLeft:"30px"}}>Puzzle Books</h3>
    {showAlertBox ?
   (<AlertBox alertBox={handleAlert}/>):("")}
  <div className='subcontainergoogle'>
  { 
   puzzles?.map((element,index)=>(     
      <>
        <div className='flex gallery'>
         <ImageGalleryGoogle prop={{"title":element?.volumeInfo?.title,"img":element?.volumeInfo?.imageLinks?.smallThumbnail?element?.volumeInfo?.imageLinks?.smallThumbnail:element?.volumeInfo?.imageLinks?.thumbnail,
            "price":`$ ${element?.saleInfo?.retailPrice?.amount}`
         }} showAlertBox={handleAlertBox} responseToAlertBox={reponseToAlertBox} key={index}/>
       </div>  
      </> 
           
  ))}
  
  </div>
  <h3 style={{marginLeft:"30px"}}>Games Books</h3>
  <div className='subcontainergoogle'>
  { 
   games?.map((element,index)=>(     
      <>
        <div className='flex gallery'>
         <ImageGalleryGoogle prop={{"title":element?.volumeInfo?.title,"img":element?.volumeInfo?.imageLinks?.smallThumbnail?element?.volumeInfo?.imageLinks?.smallThumbnail:element?.volumeInfo?.imageLinks?.thumbnail,
            "price":`$ ${element?.saleInfo?.retailPrice?.amount}`
         }} key={index} showAlertBox={handleAlertBox} responseToAlertBox={reponseToAlertBox}/>
       </div>  
      </> 
           
  ))}
  
  </div>
  <Footer/>
</div>)
}

export default GoogleBooksGame;