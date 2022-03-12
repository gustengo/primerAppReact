import React from 'react'
import Navegador from './Navbar/index'
import Greet from './Greet/index'
import Categories from './Categories/index'
import Tarjetas from './Container/index'

function Home(){
    return (
        <div>
            <Navegador />
            <Greet />
            <Categories />
            <Tarjetas />
        </div>

    )
}

export default Home;
