import React from 'react'
import img from'../olga-tutunaru-QKyk9c-uEqo-unsplash.jpg'
export const BookCard = ({book}) => {
  const {book_author, book_title,summary,url} =book;
  return (
    
    <div className='BookCard'>
     <div className="card">
     <img src={img} alt='thumbnail'
                
                className="card-image"
            />
      <div className="card-body">
      <h3>{book_title}</h3>
      <h4>{book_author}</h4>
     <p>{summary}</p>
     <a href={url} target="_blank">Read</a>
      </div>
    
      
     
     

      </div> 
    </div>
  )
}


