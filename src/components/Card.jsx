import { addCharacter, deleteCharacter } from '../redux/actions';
import { connect } from 'react-redux';
import React,{useState, useEffect} from 'react';
import styled from '../styles/Card.module.css'

export  function Card({agregar, eliminar, myFavorites,onClose, id,image,nombre,name,species,gender,characters}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = (e) => {
      const objFiltrado = characters.find(char  => (char.id == e.target.value))
      
      if(isFav) {
         setIsFav(false)
         eliminar(objFiltrado)
      } else if (!isFav) {
         setIsFav(true)
         agregar(objFiltrado)
      }
   }

   useEffect(() => {
       myFavorites.forEach((fav) => {
         if (fav.id === id) {
             setIsFav(true);
        }
      });


    }, [myFavorites]);


   return (
      
      <div className={styled.container}>
         {
   isFav ? (
      <button value={id} onClick={handleFavorite}>❤️</button>
   ) : (
      <button value={id} onClick={handleFavorite}>🤍</button>
   )
}
        <div className={styled.contenedor_butt}>
        <button onClick={ onClose} value={id} className={styled.button}>X</button>
        </div>
         <img  src={image} alt="" /> 
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
      agregar: (id) =>  {dispatch(addCharacter(id))},
      eliminar: (id) =>  {dispatch(deleteCharacter(id))}

     
   }
}

export function mapStateToProps(state) {

   return {
      myFavorites: state.myFavorites
  
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
