import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import styled from "./styles/App.module.css";
import Nav from "./components/Nav";
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import Form from "./components/Form";

function App() {
  const [access, setAccess] = useState(false);


  const [buscador, setBuscador] = useState("");
  const [characters, setCharacters] = useState([
    {
      id: 2,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ]);

  const username = "arguellojuan08@gmail.com";
  const password = "1234"
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }

  // function filterItems(query, items) {
  //   return items.filter((item) => item.name.includes(query));
  // }

  // const filteredItems = filterItems(buscador, characters);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          console.log(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onClose = (e) => {
    const updatedArray = characters.filter((obj) => obj.id != e.target.value);
    setCharacters(updatedArray);
  };

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname != '/' &&  <Nav buscador={buscador} onSearch={onSearch} setBuscador={setBuscador} /> }
      <div className={location.pathname == "/home" ? styled.container_cards : null}>
        {/* {filteredItems.length > 0 ? (
          <Cards characters={filteredItems} />
        ) : (
          <p className={styled.notResult}>No se encontraron resultados</p>
        )} */}
        <Routes>
          <Route
            path="/"
            element={<Form login = {login} />}
          />

<Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="/detail/:detailid" element={<Detail />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
