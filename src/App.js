import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import MovieCard from "./components/MovieCard";

function App() {
  const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Shrek");
  }, []);

  return (
    <div className="App">
      <h1>Watchr</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search For Movie..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          onClick={() => {
            searchMovies(search);
          }}
        >
          <BsSearch />
        </button>
      </div>

      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default App;
