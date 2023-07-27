import React from "react";
import { actors } from "../data";

function Actors() {
  return( 
  <div>
    <h2>Actors</h2>
    <ul>{actors.map((actor, index) => (
      <li key={index}>
        <h3>{actor.name}</h3>
        <p>Movies:<ul>{actor.movies.map((movies, index) =>(
          <li>{movies}</li>
        ))}</ul> </p>
        </li>
    ))}
    </ul>
    
  </div>
  );
}

export default Actors;
