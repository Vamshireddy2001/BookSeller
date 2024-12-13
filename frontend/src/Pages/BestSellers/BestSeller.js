import './BestSeller.css';
import Footer from '../../Components/Footer/Footer.js';
import ImageGallery from '../../Components/ImageGallery/ImageGallery.js';
import Header from '../../Components/Header/Header.js';
import { bestSellerProp } from '../../data/bookstoredata.js';


function BestSeller()
{
         
    return (
        <div className='SellerContainer'>
            <Header prop={{"searchRequired":true}}/>
          <h3>Best Seller</h3>
            { 
            bestSellerProp.map((element,index)=>(     
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
            {/* <ImageGallery img1={{img:book1,textOne:"New Arrivals",textTwo:"250 Euro"}}
        img2={{img:book2,textOne:"Being Hindu",textTwo:"220 Euro"}}
        img3={{img:book3,textOne:"Shesh Kitna Tamas",textTwo:"210 Euro"}}
        img4={{img:book4,textOne:"10 Languages",textTwo:"255 Euro"}}
        img5={{img:book5,textOne:"Action",textTwo:"210 Euro"}}
        img6={{img:book6,textOne:"Take your Time & Hurry",textTwo:"250 Euro"}}
        />
            <ImageGallery img1={{img:school1,textOne:"Madhu Mukhar",textTwo:"250 Euro"}}
        img2={{img:school2,textOne:"Financial Statements",textTwo:"220 Euro"}}
        img3={{img:school3,textOne:"GK Planet",textTwo:"210 Euro"}}
        img4={{img:school4,textOne:"JoyFull",textTwo:"255 Euro"}}
        img5={{img:school5,textOne:"Artificial Intelligence",textTwo:"210 Euro"}}
        img6={{img:school6,textOne:"Begin With Art",textTwo:"250 Euro"}}
        />
             <ImageGallery img1={{img:school1,textOne:"New Arrivals",textTwo:"250 Euro"}}
        img2={{img:school2,textOne:"Being Hindu",textTwo:"220 Euro"}}
        img3={{img:school3,textOne:"Shesh Kitna Tamas",textTwo:"210 Euro"}}
        img4={{img:school4,textOne:"10 Languages",textTwo:"255 Euro"}}
        img5={{img:school5,textOne:"Action",textTwo:"210 Euro"}}
        img6={{img:school6,textOne:"Take your Time & Hurry",textTwo:"250 Euro"}}
        /> */}
            <Footer/>
        </div>
    );
}

export default BestSeller;