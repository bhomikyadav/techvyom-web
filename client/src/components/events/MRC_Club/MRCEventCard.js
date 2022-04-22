import React from 'react';
import './MRCEventCard.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function MRCEventCard() {
    return (
        <div className="mrccard">
            <Card className="mrceventcard">
                <Card.Img variant="top" src="https://sloanreview.mit.edu/https://sloanreview.mit.edu/https://sloanreview.mit.edu/content/uploads/2018/04/GEN-Freeman-Artificial-Intelligence-Jobs-Retraining-New-Skills-Talent-Management-Future-Work-1200-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Polaroid Exposure (Photographic Skills)</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="mrceventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9l3Yb3RFVesXAwJx0crqPIHE4wnVn67__w&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pictograph/Logograph Designing (Logo Making)</Card.Title>
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

export default MRCEventCard
