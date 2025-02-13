import React from "react";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="Imagem da Música X"
          />
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
            alt="Imagem do Artista Y"
          />
        </div>

        <Player />

        <div>
          <p className="song__name">Cantada Boba - Ao vivo</p>
          <p>Jorge & Mateus</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
