import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "./App";
import Homepage from "./Homepage";
const Homepag = () => (
  <>
    <BrowserRouter>
      <Router>
        <Route path="/Login" exact component={App}></Route>
        <Route path="/Homepage" component={Homepage}></Route>
      </Router>
    </BrowserRouter>
  </>
);

export default Homepag;
