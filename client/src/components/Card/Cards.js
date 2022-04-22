import React from 'react';
import './Cards.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Cards() {
    return (
        <div className="bcard">
            <Link to="cs-it-events" style={{textDecoration:'none'}}>
                {""}
            <Card className="branchcard">
                <Card.Img variant="top" src="https://tdan.com/wp-content/uploads/2022/04/ART01x-feature-image-edited.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>CS/IT Competitions</Card.Title>
                    <Card.Text>By Equinox & Illuminati Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="ec-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://futureskillsprime.in/sites/default/files/inline-images/iStock-966248982.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>EC Competitions</Card.Title>
                    <Card.Text>By Robotrax Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
            <Link to="me-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://blog.flatworldsolutions.com/files/2019/11/top-mechanical-engineering-trends-to-watch-out-for-in-2020.jpg" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>ME Competitions</Card.Title>
                    <Card.Text>By Aerounautics Club</Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Cards
