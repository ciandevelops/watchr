import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import MovieCard from "./components/MovieCard";

function App() {
  useEffect(() => {
    const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=shrek`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const movie = {
    Title: "Shrek",
    Year: "2001",
    imdbID: "tt0126029",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };

  return (
    <div className="App">
      <h1>Watchr</h1>

      <div className="search">
        <input type="text" placeholder="Search For Movie..." />
        <BsSearch />
      </div>

      <div className="container">
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}

export default App;
