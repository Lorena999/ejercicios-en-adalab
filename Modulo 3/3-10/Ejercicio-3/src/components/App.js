import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import Relax from "./Relax";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/relax">Relax</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/relax" component={Relax} />
      </Switch>
    </div>
  );
}
export default App;
