import React from 'react';
import './Cards.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Card4() {
    return (
        <div className="bcard">
            <Link to="lan-war-events" style={{textDecoration:'none'}}>
                {""}
            <Card className="branchcard">
                <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-07/28/full/1564336499-4935.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>LAN War</Card.Title>
                </Card.Body>
            </Card>
            </Link>
            <Link to="open-events" style={{textDecoration:'none'}}>
            <Card className="branchcard">
                <Card.Img variant="top" src="https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/09/ISOfocus_142/1/isofocus_142-1.jpg/thumbnails/300x300" style={{height:'250px'}}/>
                <Card.Body style={{color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Open Events</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Card4
