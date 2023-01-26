import React from 'react'
import Cards from './Cards'
import styled from "../styles/Characters.module.css";

import { Button, TextField } from '@mui/material';

const Characters = (props) => {
    const { characters, onClose, setBuscador, buscador, onSearch } = props;

  return (

    <div>
        
        <div className={styled.buscador}>
        <TextField size='small' label='Buscar Aqui' type='search' onChange={(e) => setBuscador(e.target.value) }  />
          <Button variant='contained' onClick={() => onSearch(buscador)}>Agregar</Button> 
        </div>

    <div className={styled.cards}>
        <Cards characters={characters} onClose={onClose} />
    </div>
    </div>

  )
}

export default Characters