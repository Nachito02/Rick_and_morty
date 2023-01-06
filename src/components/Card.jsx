import { addCharacter, deleteCharacter } from "../redux/actions";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import styled from "../styles/Card.module.css";
import { useLocation } from "react-router-dom";
export function Card({
  agregar,
  eliminar,
  allCharacters,
  onClose,
  id,
  image,
  nombre,
  name,
  species,
  gender,
  characters,
}) {
  const [isFav, setIsFav] = useState(false);
   const location = useLocation()


  const handleFavorite = (e) => {
    const objFiltrado = characters.find((char) => char.id == e.target.value);

    if (isFav) {
      setIsFav(false);
  
      eliminar(objFiltrado);
    } else if (!isFav) {
      setIsFav(true);
      agregar(objFiltrado);
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={styled.container}>
      <div className={styled.contenedor_butt}>
        {isFav ? (
          <button
            className={styled.favButton}
            value={id}
            onClick={handleFavorite}
          >
            ❤️
          </button>
        ) : (
          <button
            className={styled.favButton}
            value={id}
            onClick={handleFavorite}
          >
            🤍
          </button>
        )}
         {location.pathname === '/home' ? (<button onClick={onClose} value={id} className={styled.button}>
          X
        </button>) : null }
      </div>
      <img src={image} alt="" />
      <h2 className={styled.nombre}>{name}</h2>

      <div className={styled.info}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    agregar: (id) => {
      dispatch(addCharacter(id));
    },
    eliminar: (id) => {
      dispatch(deleteCharacter(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
