import React from 'react';

function Card(props) {
    const{title, img, price} = props
    return(
        <div style={{border:'solid', borderRadius:'10px', width:'350px', height:'500px'}}>
            <h3>{title}</h3>
            <img src={img} style={{width:'90%', height:'50%'}}/>
            <br/><br/>
            <span>{price}</span>
            <br/>
            <button style={{width:'30%', height:'5%'}}>Buy it!</button>
        </div>
    )
}

export default Card;