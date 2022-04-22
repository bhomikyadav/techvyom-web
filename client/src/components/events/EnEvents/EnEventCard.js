import React from 'react';
import './EnEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function EnEventCard() {
    return (
        <div className="encard">
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Eb4G_b5jPLn8_l5vyNF3P7uhYhcKMeHNQ&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Drone Race (Art of Flight)</Card.Title>
                    <Card.Text>Construct a drone which can reach the destination while flying through hurdles and sharp turns etc</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://i.ytimg.com/an/D1qtR2OAVDM/a1bd23c6-c989-4b90-97b6-4b3585abbc46_mq.jpg?v=5c11aa77" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Aqua Race</Card.Title>
                    <Card.Text>In this the Robots have to move the blocks of wood from one position to another in water</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eneventcard">
                <Card.Img variant="top" src="https://i.all3dp.com/wp-content/uploads/2015/10/27130922/11950515_1700903740139223_1658642607_n-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Robo Rumble</Card.Title>
                    <Card.Text>Design remote-control Robot wireless and compete with another last stand out will be winners.</Card.Text>
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

export default EnEventCard
