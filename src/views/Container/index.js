import React from 'react'
import Tarjeta from './Card/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Tarjetas() {
    return (
        <div>
            <h4>Products</h4>
            <div style={{ display: 'row' }}>
                <Container>
                    <Row>
                        <Tarjeta />
                    </Row>
                </Container>
                
            </div>
        </div>
    )
}

export default Tarjetas;
