import React, { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredText, setFilteredText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const [movieDetails, setMovieDetails] = useState([]);
  const [isDetailSelected, setIsDetailSelected] = useState(false);

  const userSearch = () => {
    getMovieData(filteredText);
  };

  const getMovieData = async (movieSearch) => {
    setMovies([])

    let response = await fetch(
      `https://www.omdbapi.com/?s=${movieSearch}&apikey=4479e73`
    );
    let data = await response.json();

    if(data.Search === undefined){
      return setErrorMessage("No results found")
    }

    setErrorMessage(null)
    setMovies(data.Search);
  };

  const lightBoxClick = (e) =>{
    if(e.target.id == "lightbox-container"){
      console.log(e.target.id)
      setIsDetailSelected(false)
    }
  }

  const getMovieDetails = async (imdbID) => {
    if (!isDetailSelected) {
      let response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=4479e73`
      );
      let data = await response.json();
      setMovieDetails(data);
      setIsDetailSelected(true);
    } else {
      setIsDetailSelected(false);
    }
  };

  const onSearchChange = (e) => {
    setFilteredText(e.target.value);
  };

  useEffect(()=>{
    getMovieData("batman")
  },[])

  return (
    <>
      {/* Lightbox effect whenever lightbox is active when user click on "More Details" */}
      {isDetailSelected ? (
        <div id="lightbox-container" onClick={lightBoxClick}>
          <div id="lightbox">
            <div id="lightbox-image-container" >
              <img src={movieDetails.Poster} />
            </div>
            <p>Title: {movieDetails.Title}</p>
            <p>Released: {movieDetails.Released}</p>
            <p>Summary: {movieDetails.Plot}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Runtime: {movieDetails.Runtime}</p>
            <p>IMBD Rating: {movieDetails.imdbRating}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Rated: {movieDetails.Rated}</p>
            <div id="lightbox-button">
              <button onClick={getMovieDetails}>Collapse</button>
            </div>
          </div>
        </div>
        
      ) : null}
      <div className="header">
        <h1>Movie Search</h1>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            value={filteredText}
            onChange={onSearchChange}
            placeholder="Search"
          />
          <button onClick={userSearch}>Search</button>
        </div>
      </div>
      <div className="movie-list-container">
        <p id="error-message">{errorMessage}</p>
        {movies.map((movie, index) => (
          <li key={index} className="movie-list">
              <div className="image-container">
                <img src={movie.Poster}></img>
              </div>
              <h2 className="movie-list-contents">{movie.Title}</h2>
              <p className="movie-list-contents">{movie.Year}</p>
              <div className="movie-list-contents">
                <button onClick={() => getMovieDetails(movie.imdbID)}>More Details</button>
              </div>
            </li>
        ))}  
      </div>
    </>
  );
};

export default Movies;
