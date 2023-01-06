import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styles from "../styles/Favorites.module.css";
import { filterCards, orderCards } from "../redux/actions";
export function Favorites({ allCharacters, characters }) {
  const options = ["Male", "Female", "unknown", "Genderless"];
  const [all, setAll] = useState(true);
  const [order, setOrder] = useState("asc");

  const dispatch = useDispatch();

  const favoritos = useSelector((state) => state.myFavorites);

  useEffect(() => {
   
  });

  const handleOrderchange = (e) => {
    setOrder(e.target.value);
    dispatch(orderCards(e.target.value));
  };

  const handleChange = (e) => {
    if (e.target.value === "mostrar") {
      setAll(true);
    } else {
      setAll(false);

      dispatch(filterCards(e.target.value));
    }
  };


 
  return (
    <div>
      <div className={styles.contenedorSelect}>
        <p>Ordenar y filtrar Personajes</p>

        <div className={styles.select}>
          <select onChange={handleOrderchange} name="" id="">
            <option value="asc">Asendente</option>
            <option value="desc">desendente</option>
          </select>

          <select onChange={handleChange} name="" id="">
            <option value="mostrar">Mostrar todos</option>
            {options.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.favorites}>
        {all
          ? allCharacters.map((e, i) => (
              <Card
                characters={characters}
                key={i}
                id={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            ))
          : favoritos.map((e, i) => (
              <Card
                characters={characters}
                key={i}
                id={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            ))}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps)(Favorites);
