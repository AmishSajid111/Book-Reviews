
    import { useState,useEffect } from 'react';
    

import './App.css';
import { BookCard } from './Components/BookCard';
import SearchBar from './Components/SearchBar';



function App() {
    const [books,setBooks]=useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
   
    const getBooks=async()=>{
   
  
    
        const res=await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=stephen king&api-key=${process.env.REACT_APP_API_KEY}`)
       console.log(res)
        const data=await res.json();
        setBooks(data.results);
   
        setIsLoading(false);
    

    }
  
const searchBooks=async()=>
{
  setBooks("")
  setIsLoading(true)

    const res=await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${query}&api-key=${process.env.REACT_APP_API_KEY}`)
    const data=await res.json();
    setBooks(data.results);
 
    setIsLoading(false);

}

useEffect(() => {
  getBooks()
  searchBooks()
}, []);

console.log(books);
 const handleChange=(e)=>
{
    setQuery(e.target.value);
}
 const handleSubmit=(e)=>
{
 e.preventDefault();
 searchBooks()
 setQuery("")

}
  return (
   
    <div className="container">

      <h1>Read the Book Reviews</h1>
      <SearchBar  isLoading={isLoading} query={query} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div className="book">

    
      {
      books? books.map(book=>(book.summary?(<BookCard key={book.uuid}  book={book}/> ):"")):"No Result"
      }
    
  
  
      </div>
    </div>
  );
}

export default App;
