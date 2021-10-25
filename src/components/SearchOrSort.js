import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterByGenre, modifyState, reverse, search } from '../actions';

const SearchOrSortForm = () => {
    const entry = useSelector((state) => state.value)
    const genres = useSelector((state) => state.genres)
    const filter_value = useSelector((state) => state.filter_value)
    const sorted = useSelector((state) => state.sorted)
    const dispatch = useDispatch();

    const searchHandler = (value) => {
        dispatch(search(value));
    }

    const searchApiHandler = (value) => {
        console.log("Fetching", value)
        let options = {
            method: "POST",
            headers: {
                // "Authorization": `Bearer ${token}`,
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({movie: {entry: value}})
        }
        fetch(`http://localhost:3000/search_api`, options)
        .then(resp => resp.json())
        .then(movies => dispatch(modifyState(movies.results)))
    }


    function renderGenres() {
        return genres.map(ele => 
        <option key={ele.id} value={ele.id}>
            {ele.name}
        </option>
        )
    }

    const filterByGenres = (e) => {
        dispatch(filterByGenre(e.target.value));
    }

    const sortByRating = () => {
        let value = !sorted
        dispatch(reverse(value))
    }
    return (
        <div className="search-bar">
            <input 
                className="search" type="text" 
                placeholder="Search..." 
                value={entry} 
                onChange={(e) => searchHandler(e.target.value)}/>
            <button onClick={() => searchApiHandler(entry)}>Search API</button>
        <form>
            <label>
                <select value={filter_value} onChange={filterByGenres}>
                    <option value="">No preference</option>
                    {renderGenres()}
                </select>
            </label>
        </form>
        <button onClick={sortByRating}>Sort By Rating</button>

        </div>
    )


}
export { SearchOrSortForm }

