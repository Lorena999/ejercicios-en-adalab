import React from "react";
import data from "../data/data.json";
import "../stylesheets/App.scss";
import ClubList from "./ClubList";

function App() {
  return <ClubList list={data} />;
}
export default App;
