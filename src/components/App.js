import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
    <BrowserRouter>
        <NavBar/>
        {/* <Home/>
        <Actors/>
        <Directors/>
        <Movies/> */}
          <Switch>
            <Route exact path ="/movies" element = {<Movies/>}/>
            <Route exact path ="/directors" element = {<Directors/>}/>
            <Route exact path ="/actors" element = {<Actors/>}/>
            <Route exact path ="/" element = {<Home/>}/>
          </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
