import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h2>Directors</h2>
    <ul>
      {directors.map((director, index) => (
        <li key={index}>
          <h3>{director.name}</h3>
          <p>Movies: <ul>
          {director.movies.map((movies, index) => (
            <li>{movies}</li>
          ))}</ul></p>
          </li>
      ))}
    </ul>
  </div>);
}

export default Directors;
