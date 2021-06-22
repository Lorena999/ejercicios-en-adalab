import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
