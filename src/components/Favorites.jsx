import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import styles from '../styles/Favorites.module.css'
export function Favorites({myFavorites, characters})  {


  return (
    
        <div className={styles.favorites}>

            {myFavorites.map((e,i) => (

                <Card characters={characters} key={i} id={e.id} name={e.name} species={e.species} gender={e.gender} image={e.image} />         
                
                ))}
        </div>

  )
}



export function mapStateToProps(state) {
    return {
        myFavorites : state.myFavorites
    }
}


export default  connect(mapStateToProps)(Favorites)

