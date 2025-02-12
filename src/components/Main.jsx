import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

function Main() {
  return (
    <div className="main">
      <ItemList title="Artistas" items={12} itemsArray={artistArray} />

      <ItemList title="Músicas" items={24} itemsArray={songsArray} />
    </div>
  );
}

export default Main;
