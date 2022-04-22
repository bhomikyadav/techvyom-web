import React from 'react';
import './Cards.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Card2() {
    return (
        <div className="bcard">
            <Link to="en-events" style={{textDecoration:'none'}}>
                {""}
            <Card className="branchcard">
                <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d00001e021c75d11972c198f6850c3632" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>EN Competitions</Card.Title>
                    <Card.Text>By Synergy Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="pharma-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://www.thehighereducationreview.com/newnews/Ao89NwKD.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pharmacy Competitions</Card.Title>
                    <Card.Text>By Pharmquimica Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Card2
