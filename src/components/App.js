import React from "react";
import Header from "./Header";
import MusicControl from "./MusicControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <MusicControl />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;