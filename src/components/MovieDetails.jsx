import React from "react";


const moveDetails = (props) =>{
    const getMovieData = async() =>{
        let response = await fetch(`http://www.omdbapi.com/?i=${props.imdbID}&apikey=4479e73`)
        let data = await response.json()

        if (data == undefined){
            return console.log("no")
        }
        
        if (filteredText == ""){
            return alert("Please insert required field")
        }

        setFilteredMovies(data.Search)
    }

    return (
        <>
        <img src={props.Poster}/>
        <h1>{props.Title}</h1>
        <h3>{props.Director}</h3>
        <p>{props.Released}</p>
        </>
    )
}

export default moveDetails