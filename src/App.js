import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(1);
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          setCounter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
        }
      >
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
