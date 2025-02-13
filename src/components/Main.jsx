import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

function Main() {
  return (
    <div className="main">
      <ItemList
        title="Artistas"
        items={12}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      <ItemList
        title="Músicas"
        items={24}
        itemsArray={songsArray}
        path="songs"
        idPath="/song"
      />
    </div>
  );
}

export default Main;
