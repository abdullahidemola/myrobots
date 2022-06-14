import React, { useState, useEffect } from "react";
import { robots } from "./robots";
import SearchBar from "./searchBar";
import Cardlist from "./cardList";
import "./App.css";

function App() {
  const [robo, setRobot] = useState(robots);
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    setRobot(
      robots.filter((robot) => {
        return robot.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);
  return (
    <div className="container tc">
      <h1 className="header f2">ROBOFRIENDS</h1>
      <SearchBar onSearch={onSearchChange}></SearchBar>
      <Cardlist robot={robo} />
    </div>
  );
}

export default App;
