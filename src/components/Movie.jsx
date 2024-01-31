import React, {useState,useEffect} from 'react'
import moviesData from '../Data/movie'
import'../Css/movie.css'
const Movie = () => {
  const [movies, setMovies] = useState(moviesData)






  const remove = (id) => {
    const newData =movies.filter(movie => movie.id !== id)
    setMovies(newData)
  }
 const render = movies.map((movie, idx) => {
    return(
      <div  key={idx}>
        <div className='each-movie-container'>
        
         <img src={movie.url} alt="movie-image" />
         <p>Title: {movie.title}</p>
         <p>Genre: {movie.genre}</p>
         <p>Category: {movie.category}</p>
         <button className='each-movie-button' onClick={() =>remove(movie.id)}>X</button>
        </div>
      </div>
    )
  })  
  return (
       
    <div className='overall-movie' >
      <h2 style={{ textAlign:'center', margin:'1%', color:'black'}}>{movies.length}  Movies Available</h2>
       <div className='movie-container' >
        {/*<div className='movie-cat'>
          <div>
            <ul classname='movie-cat-list'>
              <li>Hollywood</li>
              <li>Nollywood</li>
              <li>Bolloywood</li>
              <li>K-drama</li>
            </ul>
          </div>
          <div>Genre</div>
        </div> */}

        
        {render}
      </div>
    </div>
  )
}

export default Movie
