import React, {useState, useEffect} from "react"


const Movies = () =>{
    const [movies, setMovies] = useState([])
    const [filteredText, setFilteredText] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState([])
    const [isDetailSelected, setIsDetailSelected] = useState(false)
    
    const getMovieData = async() =>{
        let response = await fetch(`http://www.omdbapi.com/?s=${filteredText}&apikey=4479e73`)
        let data = await response.json()

        if (data == undefined){
            return console.log("empty")
        }
        
        if (filteredText == ""){
            return alert("Please insert required field")
        }
        setMovies(data.Search)
        console.log(data.Search)
        setFilteredMovies(data.Search)
    }

    const getMovieDetails = async(imdbID) =>{
        let response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4479e73`)
        let data = await response.json()
        setMovieDetails(data)
        setIsDetailSelected(true)

    }

    const onSearchChange = (e) =>{
        setFilteredText(e.target.value)
    }

    

    if(!isDetailSelected){
    return (
        <>
      
        <section className="page-wrapper">
            <h1>Movie Search</h1>
            <input className="search-box" type="text" value={filteredText} onChange={onSearchChange} placeholder="Search" />
            <button onClick={getMovieData}>Search</button>
            <div className="movie-list-container">{movies.map((movie, index) => {
                return (
                    <>
                    <div>
                        <ol className="movie-list">
                            <li key={index}>
                                <img src={movie.Poster}></img>
                                <h2>{movie.Title}</h2>
                                <p>{movie.Year}</p>
                                <button onClick={() => {getMovieDetails(movie.imdbID)}}>Details</button>
                            </li>
                        </ol>
                    </div>
                    </>    
                )
            })}
            </div>
        </section>
        </>
    )
}
else{
    return(
        <div>hi</div>
        )
    }
}

export default Movies

  