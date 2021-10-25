import React from "react";
import { Route, Switch } from "react-router-dom";
import Movie from "../components/Movie";
import '../movies.css';
import Movies from "../components/Movies";
function MovieContainer() {

    return (
        <div>
            <Switch>
                <Route path="/movies/:id" render={(routerProps) => {
                    let id = parseInt(routerProps.match.params.id)
                    return (<Movie id={id}/>)
                }} />
                <Route path="/" render={()=><ul className='tilesWrap'> <Movies/> </ul>}/>
            </Switch>
        </div>
    );

}





export default MovieContainer