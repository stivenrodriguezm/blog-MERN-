import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav id="header">
        <Link to="/">Inicio</Link>
        <Link to="/NewPost">Nuevo Post</Link> 
        <Link to="/ViewAll">Ver Todos</Link> 
    </nav>
)

export default Header