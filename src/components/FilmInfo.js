import React from "react";
import films from "../mocks/handlers.js";
// Datayı axios ile çekemedim :(

function FilmInfo({ charFilm }) {
  const filmler = films[0].results;
  const filteredFilm = filmler.filter((object) => {
    return object.title === charFilm;
  });
  return (
    <>
      <p>{filteredFilm[0]["opening_crawl"]}</p>
      <p>Directed by: {filteredFilm[0].director}</p>
      <p>Produced by: {filteredFilm[0].producer}</p>
      <p>Release Date: {filteredFilm[0]["release_date"]}</p>
    </>
  );
}

export default FilmInfo;
