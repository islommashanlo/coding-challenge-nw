import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MovieContainer from "./MovieContainer";

function MainContainer() {
    // read from the Redux store
    const all = useSelector((state) => state);

    return (
        <div>
            <Switch>
                <Route path="/" render={()=> <MovieContainer/>}/>
            </Switch>
            {console.log(all)}
        </div>
    );
    
}

export default MainContainer; 
