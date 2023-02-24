import React from "react";
import Film from "./Film";
function Karakterİnfo({
  mass,
  height,
  hair_color,
  eye_color,
  skin_color,
  gender,
  films,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "7px solid red",
        marginTop: "10px",
        flexDirection: "column",
      }}
    >
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Eye Color:{eye_color}</p>
      <p>Hair Color:{hair_color}</p>
      <p>Skin Color:{skin_color}</p>
      <p style={{ fontWeight: "bold" }}>Appears in {films.length} films</p>
      <div>
        {films.map((film) => (
          <Film film={film} />
        ))}
      </div>
    </div>
  );
}
export default Karakterİnfo;
