import React from 'react'
import './MovieDetail.css'

const MovieDetail = ({movie}) => {
  return (
    <div className='movieDetailDesign'>
            <h3>{movie.title}</h3>
            <div> <img className='detailPic' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/></div>
            <div className='dateAndRating'>
            <div>Release date: {movie.release_date}</div> 
            <div className='rating'>Rating: {movie.vote_average} ⭐️</div>
            </div>
            <div className='movieOverview'>{movie.overview}</div>
            
        </div>
  )
}

export default MovieDetail