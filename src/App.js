import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styled from './styles/App.module.css'




function App () {


    const [buscador, setBuscador] = useState('')
  
    console.log(buscador)

    function filterItems(query, items) {
      return items.filter(item => item.name.includes(query));
    }


    const filteredItems = filterItems(buscador, characters);
 
  return (
    
    <div className='App'>
        <SearchBar
          buscador = {buscador} setBuscador = {setBuscador}
        />

      <hr />

          

      <div className={styled.container_cards}>
        {filteredItems.length > 0 ? (
          <Cards characters={filteredItems} />
        ) : (
          <p className={styled.notResult}>No se encontraron resultados</p>
        )}
      </div>
      <hr />
      <div>
      
      </div>
    </div>
  )
}

export default App
