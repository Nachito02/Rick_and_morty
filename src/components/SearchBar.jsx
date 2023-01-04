

import styled from '../styles/Navbar.module.css'
import { Link } from "react-router-dom";


export default function SearchBar(props) {

  const {setBuscador, buscador, onSearch} = props


   return (
      <div className={styled.container}>
      
         <div className={styled.logo}>
           <Link to='/home'> <h1>Rick and Morty App</h1></Link>
         </div>
          
          <div className={styled.nav}>
          <input type='search' onChange={(e) => setBuscador(e.target.value) }  />
          <button onClick={() => onSearch(buscador)}>Agregar</button> 
          </div>
          <Link className={styled.home} to="/home">Home</Link>
          <Link className={styled.home} to="/favorites">Favorites</Link>

          <Link className={styled.about} to="/about">About me</Link>

      </div>
   );
}
