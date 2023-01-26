

import styled from '../styles/Navbar.module.css'
import { Link } from "react-router-dom";


export default function SearchBar(props) {

  const {setBuscador, buscador, onSearch} = props

   return (
      <div className={styled.container}>
      
         <Link to="/home">
         <div className={styled.logo}>
            <img src="./static/img/logo_2.webp" alt="" />
         </div></Link>
          
          <div className={styled.nav}>
        
        
          <Link className={styled.home} to="/home">Home</Link>
          <Link className={styled.home} to="/characters">Personajes</Link>

          <Link className={styled.home} to="/favorites">Favorites</Link>

          <Link className={styled.about} to="/about">About me</Link>
          </div>
      </div>
   );
}
