import React from 'react'
import styled from '../styles/Home.module.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className={styled.container}>

            <div className={styled.header}>
                <h1>Rick And Morty API</h1>
                <h3>Busca tus personajes favoritos de Rick And Morty</h3>
                <Link to='/characters'><Button variant='contained'>Empezar</Button></Link>
            </div>

            <div className={styled.imagen}>
                <img src="./static/img/startpage_image.png" alt="" />
            </div>

        </div>
    )
}

export default Home