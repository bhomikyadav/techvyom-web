import React from 'react';
import './DesignEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function DesignEventCard() {
    return (
        <div className="designcard">
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://render.fineartamerica.com/images/rendered/square-product/small/images/artworkimages/mediumlarge/1/tech-symbol-leon-zernitsky.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Technical Painting</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0553/3594/4379/articles/At_49_300x.jpg?v=1617897101" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Multimedia Art</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default DesignEventCard
