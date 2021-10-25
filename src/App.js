import './App.css';
import MainContainer from './containers/MainContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import { getInitialData, getInitialGenres } from './actions';
function App() {
  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
    .then(resp => resp.json())
    .then(movies => dispatch(getInitialData(movies["results"])))

    fetch(`http://localhost:3000/genres`)
    .then(resp => resp.json())
    .then(genres => dispatch(getInitialGenres(genres.genres)))
  })

  return (
    <div className="App">
       <Switch>
          <Route path="/" component={MainContainer}/>

        </Switch>
    </div>
  );
}

export default App;