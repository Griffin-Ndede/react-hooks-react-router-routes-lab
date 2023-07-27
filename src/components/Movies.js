import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h2>Movies</h2>
    <ul>{movies.map((movie, index) =>(
      <li>
        <h3>{movie.title}</h3>
        <p>Duration: {movie.time}</p>
        <p>Genre: <ul>
        {movie.genres.map((genres)=>(
          <li>{genres}</li>
        ))}
        </ul>
        </p>
      </li>
    ))}</ul>
    <div>
  
    </div>
  </div>);
}

export default Movies;
