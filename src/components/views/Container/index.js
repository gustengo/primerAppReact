import React from 'react'
import Tarjeta from './Card/index'

function Tarjetas(){
    return(
        <div>
            <h4>Products</h4>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <Tarjeta/>
                <Tarjeta/>
                <Tarjeta/>
            </div>
        </div>
    )
}

export default Tarjetas;
