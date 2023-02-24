import React from "react";
function NavBar({ setPage }) {
  function handleClick(event) {
    setPage(event.target.innerText);
    console.log(event.target.innerText);
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", color: "blue" }}
    >
      <p onClick={handleClick}>1</p>
      <p onClick={handleClick}>2</p>
      <p onClick={handleClick}>3</p>
      <p onClick={handleClick}>4</p>
      <p onClick={handleClick}>5</p>
      <p onClick={handleClick}>6</p>
      <p onClick={handleClick}>7</p>
      <p onClick={handleClick}>8</p>
      <p onClick={handleClick}>9</p>
    </div>
  );
}
export default NavBar;
