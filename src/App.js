import React,{useState} from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar"
import AddMovie from "./AddMovie"
import SearchBox from "./SearchBox";
import"./App.css"

const App = () => {
  const [movies, setMovies] = useState([
    {
      id:'tomb',
      title: 'Tomb Raider',
      date: 2018,
      producer:'Roar Uthaug',
      length:'134 min',
      type:'Action, Fantasy',
      description: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
      posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg',
      BackPosterURL:'https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png',
      trailer:"https://dai.ly/x6dfc0u",
      rating:6.3
    },
    {
      id:'barbie',
      title: 'Barbie',
      date: 2023,
      producer:'Greta Gerwig',
      length:'114 min',
      type:'Advunture, Comedy, Fantasy',
      description: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      posterURL: 'https://pyxis.nymag.com/v1/imgs/5af/3b0/c16411171ab1660f356026acb1fd3c6c8c-barbie-poster.1x.rsquare.w1400.jpg',
      BackPosterURL:'https://preview.redd.it/barbie-movie-1920x1080-v0-4ctdd8dfwy8b1.jpg?auto=webp&s=abdab9a2e2cd41a6ae772d3152d181051f3dd3c8',
      trailer:"https://dai.ly/x6dfc0u",
      rating:6.9
    },
    {
      id:'godfather',
      title: 'The Godfather',
      date: 1972,
      producer:'Francis Ford Coppola',
      length:'175 min',
      type:'Drama, Crime',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYzYyYWJhZGEtZmY1YS00NGY5LTgyZjgtYmE3OWI3ZjczYTgxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX540_.jpg',
      BackPosterURL:"https://c4.wallpaperflare.com/wallpaper/403/669/180/style-movie-art-classic-wallpaper-preview.jpg",
      trailer:"https://www.dailymotion.com/embed/video/x88g7uy?autoplay=1",
      rating:9.2
    }, 
    {
      id:'bright',
      title: 'Bright',
      date: 2017,
      producer:'David Ayer',
      length:'117 min',
      type:'Action, Crime, Fantasy',
      description: 'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.',
      posterURL: 'https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
      BackPosterURL:"https://www.heavenofhorror.com/wp-content/uploads/2017/12/bright-netflix-1200x675.jpg",
      trailer:"https://dai.ly/x8mhzke",
      rating:6.3
    },
    {
      id:'ave',
      title: 'Black Panther',
      date: 2018,
      producer:'Ryan Coogler',
      length:'117min',
      type:'Action, Adventure, Sci-Fi',
      description: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      posterURL: 'https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg',
      BackPosterURL:"https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
      trailer:"https://dai.ly/x801lyc",
      rating:7.3
    },
   
    // Add as many movies as needed
  ]);


  //Filter movies 
  const [searchValue, setSearchValue] = useState('');
  const [searchRate, setSearchRate] = useState(1);
  const search=(value)=>{
    setSearchValue(value)
    setSearchRate(value)
  }
  
  //Adding a movie
  const addMovie=(movie)=>{
    setMovies(movies.concat(movie))
  }

  

  return (
    <div className="app">
      <Navbar/>
      <MovieList addMovie={addMovie} movies={movies.filter(el=> el.rating>= searchRate || el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}/>
      <h2>Add New Movie</h2>
      <AddMovie/>      
      <SearchBox/>
    </div>
  );
};

export default App;