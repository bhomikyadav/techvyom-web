import React from 'react';
import './PharmaEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function PharmaEventCard2() {
    return (
        <div className="pharmacard">
            <Card className="pharmaeventcard">
                <Card.Img variant="top" src="https://i.ebayimg.com/images/g/wxoAAOSwkBZZnT07/s-l300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pharmesquisser<br/>(Pencil Sketch Painting)</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="pharmaeventcard">
                <Card.Img variant="top" src="https://www.vwv.co.uk/media/zoo/images/pharmaceuticals-and-life-sciences-479x243_611f572747a9f20b9fd7031eb74b59ab.jpg?1523290330" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Pharma Desk</Card.Title>
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

export default PharmaEventCard2
