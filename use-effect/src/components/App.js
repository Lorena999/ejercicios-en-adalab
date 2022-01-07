import "../styles/App.css";
import LocalStorage from "./LocalStorage";
import Paranormal from "./Paranormal";
import Shows from "./Shows";

function App() {
  return (
    <div className="App">
      <LocalStorage />
      <Shows />
      <Paranormal />
    </div>
  );
}

export default App;
