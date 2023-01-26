import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import styled from "./styles/App.module.css";
import Nav from "./components/Nav";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Characters from "./components/Characters";

function App() {
  const [access, setAccess] = useState(true);
  const [error, setError] = useState(false);

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
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ]);

  const username = "admin";
  const password = "admin";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      setError('Usuario o contraseña invalidos, prueba con: admin, admin')
    }
  }

  // function filterItems(query, items) {
  //   return items.filter((item) => item.name.includes(query));
  // }

  // const filteredItems = filterItems(buscador, characters);

  function onSearch(character) {
    const dup = characters.some((char) => char.id == buscador);

    if (dup) return window.alert("ya existe el personaje");

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
    !access && navigate("/");
  }, [access]);

  const onClose = (e) => {
    const updatedArray = characters.filter((obj) => obj.id != e.target.value);
    setCharacters(updatedArray);
  };

  const location = useLocation();

  return (

    <div className={styled.App}>
      {location.pathname != "/" && (
        <Nav
          buscador={buscador}
          onSearch={onSearch}
          setBuscador={setBuscador}
        />
      )}
     
        {/* {filteredItems.length > 0 ? (
          <Cards characters={filteredItems} />
        ) : (
          <p className={styled.notResult}>No se encontraron resultados</p>
        )} */}
        <Routes>
          <Route path="/" element={<Form login={login} error={error} />} />
          <Route
            path="/home"
            element={<Home onClose={onClose} characters={characters} />}
          />
          <Route path="/detail/:detailid" element={<Detail />} />
          <Route path="about" element={<About />} />
          <Route path="/favorites" element={<Favorites characters={characters} />} />
          <Route path="/characters" element={<Characters characters={characters} onClose={onClose} setBuscador={setBuscador} onSearch={onSearch} buscador={buscador} />} />

        </Routes>
      </div>


  );
}

export default App;
