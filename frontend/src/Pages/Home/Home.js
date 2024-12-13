import Header from '../../Components/Header/Header';
import './Home.css';
import poster1 from '../../Assets/poster1.jpg';
import poster2 from '../../Assets/poster2.jpg';
import poster3 from '../../Assets/poster3.jpg';

import tarot from '../../Assets/tarotcardWeb.jpg';
import BusinessWeb from '../../Assets/BussinessWeb.jpg';
import examweb from '../../Assets/ExamWeb.jpg';

import Footer from '../../Components/Footer/Footer.js';
import { useEffect, useState } from 'react';
import ImageGallery from '../../Components/ImageGallery/ImageGallery.js';
import { bestSellerProp } from '../../data/bookstoredata.js';
import ImageGalleryHome from '../../Components/ImageGallery/ImageGalleryHome.js';

function Home()
{
  const poster = [poster1, poster2, poster3];
  const lengthPoster = poster.length;
  let i = 0;
  let posterSwitch=poster1;
  
  const [posterImg,setImagePoster]=useState(poster1);
  useEffect(() => {
    const intervalId = setInterval(sliding, 3000);
    
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [i]);
  
  const sliding = () => {
    // Update i for sliding through posters
    i++;
    if(i>lengthPoster-1)
     i=0;
     setImagePoster(poster[i]);
  };

  return (
    <div className='HomeContainer'>
       <Header prop={{"searchRequired":false}}/>
          <section className='homegallery'>
             <div className='sideimage'>
               <img src={examweb} alt='sideimage'/>
             </div>
             <div className='mainimage'>
               <img src={tarot} alt='mainimage'/>
             </div>
             <div className='sideimage'>
               <img src={BusinessWeb} alt='sideimage'/>
             </div>
          </section>
          
         {bestSellerProp.length > 0 && (
          <>
            <div className='flex gallery'>
              {Object.values(bestSellerProp[0].row).map((section, index) => (
                <ImageGalleryHome
                  prop={{ title: bestSellerProp[0].title, element: section }}
                  key={index}
                />
              ))}
            </div>
          </>
        )}
        <Footer/>
    </div>
  );
}

export default Home;