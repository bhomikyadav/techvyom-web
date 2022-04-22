import React from 'react';
import './CsEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function CsEventCard() {
    return (
        <div className="cscard">
            <Card className="cseventcard">
                <Card.Img variant="top" src="https://www.richfillenterprises.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-15-at-11.20.15-AM-5-520x574.jpeg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Web Battle</Card.Title>
                    <Card.Text>Design a web page on the theme provided</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="cseventcard">
                <Card.Img variant="top" src="https://www.soundtrackmania.net/wp-content/uploads/2015/02/debug2015.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Beat-The-Bug</Card.Title>
                    <Card.Text>Find programming mistake or error in the given block of code</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="cseventcard">
                <Card.Img variant="top" src="http://www.ttwsolutions.com/solutionttw/wp-content/uploads/2017/07/ttw-datamanagement-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>DB Knight</Card.Title>
                    <Card.Text>Write the code/query for the schema provided</Card.Text>
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

export default CsEventCard
