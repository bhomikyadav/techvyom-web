import React from 'react';
import './LiteraryEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function LiteraryEventCard() {
    return (
        <div className="literarycard">
            <Card className="literaryeventcard">
                <Card.Img variant="top" src="https://d359n4bp5osg9k.cloudfront.net/ProductImages/Category/9/BMGL24T_0.jpg?selAppId=yedazweb&v=012200" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Arz kiya hai </Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="literaryeventcard">
                <Card.Img variant="top" src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/7a9ffb92-179b-426c-897d-1edd643081b4" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Let’s Get Quizzical</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="literaryeventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCxj0lSSZdEO1w23SXXEkP-_u9uSAmkhTxw&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Spell-O-Ween</Card.Title>
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

export default LiteraryEventCard
