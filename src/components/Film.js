import React, { useState } from "react";
import axios from "axios";
import FilmInfo from "./FilmInfo";
function Film({ film }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <h2
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        {film}
      </h2>

      {showInfo ? <FilmInfo charFilm={film} /> : <p></p>}
    </>
  );
}
export default Film;
