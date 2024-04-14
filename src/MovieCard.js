import React, { useState } from 'react';
import './MovieCard.css'

// MovieCard component to display individual movie details
const MovieCard = ({ movie }) => {
const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the description's visibility
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
    <div class="movie_card" id={movie.id}>
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.posterURL} alt={movie.title}/>
      <h1>{movie.title}</h1>
      <h4>{movie.producer}</h4> 
      <p class="rating">Rating : {movie.rating}/10</p>
      <div class="details">
          <span class="minutes">117 min</span>
      <p class="type">Action, Crime, Fantasy</p>
      </div>
    
    </div>

    <div class="movie_desc">
      <p class="text"> {isExpanded ? `${movie.description}` : `${movie.description.slice(0, 180)}`} 
      {`${movie.description}`.length > 180 && (<button className="SeeMore" onClick={toggleDescription}>
          {isExpanded ? "See Less" : "See More"}
        </button>)}</p>
      <button class="trailer">Watch trailer</button>
    </div>
  </div>
  <div class="blur_back" style={{backgroundImage:`url(${movie.BackPosterURL})`}}></div>
</div>
</>
  );
};


 

export default MovieCard;