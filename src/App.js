import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=" + page)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div className="App">
      <SearchBar
        search={search}
        setSearch={setSearch}
        data={data}
        setData={setData}
      />
      {data ? (
        data.map((karakter) => <Karakter karakter={karakter} />)
      ) : (
        <p>Yükleniyor...</p>
      )}
      <NavBar setPage={setPage} />
    </div>
  );
};

export default App;
