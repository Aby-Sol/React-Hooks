import React from 'react'
import './App.css';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <div className='Header'>
    <div className="netflixLogo">
      <a id="logo" href="#home">
        <img
          src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
          alt="Logo Image"
        />
      </a>
    </div>
    <nav className="main-nav">
      <a href="#home">Home</a>
      <a href="#tvShows">TV Shows</a>
      <a href="#movies">Movies</a>
      <a href="#originals">Originals</a>
      <a href="#">Recently Added</a>
    </nav>
    <nav className="sub-nav">  
      <a href="#">Account</a>
    </nav>
    <SearchBox/>
  </div>
  )
}

export default Navbar