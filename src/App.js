import './App.css';
import SearchIcon from './search.svg';

import { useEffect } from 'react';

// My API key: 49233842

const API_URL = 'http://www.omdbapi.com?apikey=49233842';

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    // Getting just the movies Array with "Search"
  };

  useEffect(() => {
    searchMovies('Coco');
  }, []);

  /*
  - We want to fetch the data from the api as soon as our component loads.
    For that we use the hook "useEffect"
    When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.
    Effects are declared inside the component so they have access to its props and state. 
    By default, React runs the effects after every render — including the first render
  - An empty dependency array "[]" is used to call it at the start only. 
*/

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Find movies"
          value={'Superman'}
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" />
      </div>

      <div></div>
    </div>
  );
}

export default App;
