import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchOrSortForm } from "./SearchOrSort";

function Movies() {

    const movies = useSelector((state) => state.api);
    const filteredmovies = useSelector((state) => state.filtered_api)
    const searchVal = useSelector((state) => state.value)
    const filterValue = useSelector((state) => state.filter_value)


    function allmovies() {
        if (movies.length > 0 && searchVal === "" && filterValue === "") {
            return movies.map(ele => 
                <li key={ele.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="MOVIE"/> 
                    <h2>{ele.original_title}</h2>
                    <h4>Rating: {ele.vote_average}</h4>
                    <Link to={`/movies/${ele.id}`}><button>Details</button></Link>
                </li>
            )
        }
        else if(filteredmovies.length > 0 ){
            return (
                filteredmovies.map(ele => 
                <li key={ele.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} alt="MOVIE"/> 
                    <h2>{ele.original_title}</h2>
                    <h4>Rating: {ele.vote_average}</h4>
                    <Link to={`/movies/${ele.id}`}><button>Details</button></Link>
                </li>
            ))
        }
        else {
            return <div> No Data </div>
        }
    }

    return (
    <div>
        <SearchOrSortForm/>
        {allmovies()}
    </div>)
}

export default Movies
