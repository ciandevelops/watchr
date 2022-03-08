import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
      <p>{movie.Type}</p>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
    </div>
  );
};

export default MovieCard;
