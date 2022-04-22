import React from 'react';
import './EnEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function EnEventCard2() {
    return (
        <div className="encard">
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/S/aplus-media/vc/f0a3ec3e-ca18-4ddf-bf29-63a62ecb6b05._SR300,300_.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Drag & Place</Card.Title>
                    <Card.Text>Drag the obstacle & place it in their required places. The arena will be revealed during the competition</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0403/7089/7047/files/Ewaste_2_300x300.jpg?v=1598993858" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Junk-War (E-Wastes Conversion)</Card.Title>
                    <Card.Text>To build a model from E-Waste &amp; That Model Should Show Some Output.</Card.Text>
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

export default EnEventCard2
