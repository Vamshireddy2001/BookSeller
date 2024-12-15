import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import BestSeller from './Pages/BestSellers/BestSeller.js';
import Cart from './Pages/Cart/Cart.js';
import NewArrivals from './Pages/NewArrivals/NewArrivals.js';
import GoogleBooks from './Pages/GoogleBooks/googlebook,.jsx';
import GoogleBooksGame from './Pages/GoogleBooksGames/googlebook,.jsx';
import BookRecommendation from './Pages/BookRecommendation/index.jsx';
import SearchPage from './Pages/SearchPage/index.js';
import Notes from './Pages/Notes/index.jsx';
import FinalCheckout from './Pages/FinalCheckout/index.js';
import GoogleBooksSchoolFiction from './Pages/GoogleBooksSchoolFiction/googlebook,.jsx';
import GoogleBooksHigherEducation from './Pages/GoogleBooksHigherEducation/googlebook,.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/BestSeller' element={<BestSeller/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/NewArrivals' element={<NewArrivals/>}></Route>
        <Route path='/Googlebooks' element={<GoogleBooks/>}/>
        <Route path='/GoogleBooksGame' element={<GoogleBooksGame/>}/>
        <Route path='/BookRecommendation' element={<BookRecommendation/>}/>
        <Route path='/SchoolEducation' element={<GoogleBooksSchoolFiction/>}/>
        <Route path='/Search' element={<SearchPage/>}/>
        <Route path='/Notes' element={<Notes/>}/>
        <Route path='/checkout' element={<FinalCheckout/>}/>
        <Route path='/highereducation' element={<GoogleBooksHigherEducation/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

