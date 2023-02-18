import './App.css';

import { useEffect } from 'react';
/*
  - We want to fetch the data from the api as soon as our component loads.
  For that we use the hook "useEffect"
  - An empty dependency array "[]" is used to call it at the start only. 
*/

// My API key: 49233842  49233842

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

  return <h1>App</h1>;
}

export default App;
