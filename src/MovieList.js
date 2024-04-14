// MovieList component to display a list of movies
import MovieCard from "./MovieCard";
import "./movieList.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Add from './AddMovie.js';


const MovieList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
             <h1 className="WatchList">My Watch List</h1>
       <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className='movie' id='addMovie'>
          <i onClick={handleShow} class="fa-solid fa-plus fa-2xl" style={{color: "rgb(134, 134, 133)", fontSize:160 , marginTop: 180 ,marginLeft: 60, marginRight:60 , cursor:"pointer"}}></i>
          <Add className='movie' addMovie={addMovie} show={show} handleClose={handleClose}/>
        </div>
      </>
  
    );
  };




  export default MovieList