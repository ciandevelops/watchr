import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=shrek`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
