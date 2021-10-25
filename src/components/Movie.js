import React from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import '../movie.css'

function Movie(props) {
    const movies = useSelector((state) => state.api);
    const movie = movies.find(ele=> ele.id === props.id)
    const genres = useSelector((state) => state.genres)
    const genreNames = genres.filter(g => movie.genre_ids.includes(g.id))
    
    let history = useHistory();

    console.log(movie)

    function renderGenres() {
        return genreNames.map(ele => 
            <div>
                {ele.name}
            </div>    
        )
    }

    return (
        <div className="container mt-5">
           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="MOVIE"/> 
           <h2>{movie.original_title}</h2>
           <h4>Genres: {renderGenres()} </h4>
           <h4>Rating: {movie.vote_average}</h4>
           <p> {movie.overview}</p>
        <button onClick={() => history.goBack()}>Back</button>
        </div>
    )


};

export default Movie;

