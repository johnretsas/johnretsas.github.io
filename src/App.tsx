import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Blog from "./components/blog/Blog";
import Home
  from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

import './css/App.css';

const App = () => {
  console.table({
    email: "joretsas@gmail.com"
  })
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route  path="/blog/:blogId">
            <Blog />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;