import React from 'react';
import './CsEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function CsEventCard2() {
    return (
        <div className="cscard">
            <Card className="cseventcard">
                <Card.Img variant="top" src="https://img2.exportersindia.com/product_images/bc-full/2020/4/7024165/c-programming-1586255881-5361285.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>C-Experts</Card.Title>
                    <Card.Text>Perform programming in C</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="cseventcard">
                <Card.Img variant="top" src="https://strosemedia.s3.amazonaws.com/wp-content/uploads/2015/09/15154733/Computer_Information_Systems-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Tech-Play</Card.Title>
                    <Card.Text>Perform a play on given problem</Card.Text>
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

export default CsEventCard2
