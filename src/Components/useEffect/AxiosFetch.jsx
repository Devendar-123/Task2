import React, { useEffect, useState } from 'react'
import axios from "axios"
const AxiosFetch = () => {
   
    const [books,setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState("")
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
            setBooks(response.data.items);  
          } catch (error) {
            setError(error)
          } finally {
            setLoading(false);  
          }
        };
    
        fetchBooks();  
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
      if(error){
        <div>{error}</div>
      }
  return (
    <div>
      <h1>Book List using Axios</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosFetch
