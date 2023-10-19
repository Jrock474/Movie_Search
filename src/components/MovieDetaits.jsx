import React from 'react'

const MovieDetaits = (props) => {
  return (
    <>
    <div className='movie-details'>
        <p className='movie-endpoint'>{props.movieEndpoint + ""}</p>
        <p>{props.details}</p>
    </div>
    </>
  )
}

export default MovieDetaits