import axios from "axios";
import url from "../Utils/Utils";


const fetchBooks=async (bookName)=>{
     const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);

     if(response.data)
     {
        // console.log(response.data);
        return response.data;
     }
     return "No reponse found!"
}


const fetchBooksRecommendation=async (genre,author)=>{

    const response=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}+inauthor:${author}`);

    if(response.data)
    {
       // console.log(response.data);
       return response.data;
    }
    return "No reponse found!"
}



export {fetchBooks,fetchBooksRecommendation};