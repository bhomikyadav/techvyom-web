import React from 'react';
import './MeEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function MeEventCard() {
    return (
        <div className="mecard">
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZbMiRtzlBuW9X6ur_w0sLR8AJYfSFpzaNQ&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Glider Plane Design</Card.Title>
                    <Card.Text>Design & build a Glider Plain made of BalsaWood, which will be launched by using a hand</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="meeventcard">
                <Card.Img variant="top" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://technoreview85.com/wp-content/uploads/2022/02/Heart-beat-senor-min-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Chain Reaction</Card.Title>
                    <Card.Text>Chain Reaction is a sequence of reactions where a reactive product causes additional reactions to take place.</Card.Text>
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

export default MeEventCard
