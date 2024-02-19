import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cra(props) {
    return (
        <div >
            <Card key={props.key} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.job}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cra
