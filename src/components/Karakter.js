// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";
import Karakterİnfo from "./Karakterİnfo";
function Karakter({ karakter }) {
  const {
    name,
    birth_year,
    mass,
    height,
    hair_color,
    eye_color,
    skin_color,
    gender,
    films,
  } = karakter;
  const [info, setInfo] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "7px solid blue",
          marginTop: "10px",
        }}
      >
        <h1
          onClick={() => {
            setInfo(!info);
          }}
        >
          {name}
        </h1>
        <h1>{birth_year}</h1>
      </div>
      {info ? (
        <Karakterİnfo
          mass={mass}
          height={height}
          hair_color={hair_color}
          eye_color={eye_color}
          skin_color={skin_color}
          gender={gender}
          films={films}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
export default Karakter;
