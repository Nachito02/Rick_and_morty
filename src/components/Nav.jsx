import SearchBar from "./SearchBar";

import React from 'react'

const Nav = (props) => {
    const {buscador, onSearch, setBuscador} = props
  return (
    <div >  

       

      <SearchBar buscador={buscador} onSearch={onSearch} setBuscador={setBuscador} /> </div>

  )
}

export default Nav