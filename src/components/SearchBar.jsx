

import styled from '../styles/Navbar.module.css'


export default function SearchBar(props) {

  const {setBuscador, buscador} = props


   return (
      <div className={styled.container}>
         <div className={styled.logo}>
            <h1>Rick and Morty App</h1>
         </div>
          
          <div className={styled.nav}>
          <input type='search' onChange={(e) => setBuscador(e.target.value) } value={buscador} />
      <button onClick={() => console.log('click en barra')}>Agregar</button> 
          </div>
      </div>
   );
}
