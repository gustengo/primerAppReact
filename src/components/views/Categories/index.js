import React from 'react'
import Button from 'react-bootstrap/Button'
import Categ from '../../../categories.json'

function Categories(){
    return(
        <div>
            <h3>Categories</h3>
            {Categ.map((category) => {
                return (
                    <Button variant="primary" key={category}>{category}</Button>
                )
            })}
        </div>
    )
}

export default Categories

