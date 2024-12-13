import './NewArrivals.css';
import book1 from '../../Assets/book1.jpg';
import book2 from '../../Assets/book2.jpg';
import book3 from '../../Assets/book3.jpg';
import book4 from '../../Assets/book4.jpg';
import book5 from '../../Assets/book5.jpg';
import book6 from '../../Assets/book6.jpg';

import school1 from '../../Assets/school1.jpg';
import school2 from '../../Assets/school2.jpg';
import school3 from '../../Assets/school3.jpg';
import school4 from '../../Assets/school4.jpg';
import school5 from '../../Assets/school5.jpg';
import school6 from '../../Assets/school6.jpeg';
import Footer from '../../Components/Footer/Footer.js';
import ImageGallery from '../../Components/ImageGallery/ImageGallery.js';
import Header from '../../Components/Header/Header.js';
import { newArrivalProp } from '../../data/bookstoredata.js';



function NewArrivals()
{
    return (
        <div className='SellerContainer'>
            <Header prop={{"searchRequired":true}}/>
            <h3>BEST SELLER</h3>
            { 
            newArrivalProp.map((element,index)=>(     
                <>
                <div className='GalleryHeading'>
                    <h2>{element.title}</h2>
                    <hr/>
                </div>
                  <div className='flex gallery'>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section1}} key={index}/>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section2}} key={index}/>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section3}} key={index}/>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section4}} key={index}/>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section5}} key={index}/>
                        <ImageGallery prop={{"title":element.title,"element":element.row.section6}} key={index}/>
                 </div>  
                </> 
                     
            ))}
            <Footer/>
        </div>
    );
}

export default NewArrivals;