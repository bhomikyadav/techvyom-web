import React from 'react'
import './LANWarEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function LANWarEventCard() {
    return (
        <div className="lanwarcard">
            <Card className="lanwareventcard">
                <Card.Img variant="top" src="https://i.pinimg.com/474x/8c/b4/72/8cb472618bf8b4d56eabb939279649c7.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Battleground (BGMI)</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="lanwareventcard">
                <Card.Img variant="top" src="https://www.madmagazine.com/sites/default/files/field/image/MAD-Magazine-FIFA-Logo-Thumb_55661aa4baecf9.06299996.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>FIFA</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="lanwareventcard">
                <Card.Img variant="top" src="https://games.lol/wp-content/uploads/2020/12/mini-militia-on-pc.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Mini-Militia</Card.Title>
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

export default LANWarEventCard
