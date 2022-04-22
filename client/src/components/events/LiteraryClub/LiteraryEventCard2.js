import React from 'react';
import './LiteraryEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function LiteraryEventCard2() {
    return (
        <div className="literarycard">
            <Card className="literaryeventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefXl-L7yxm7i1teHEUBrWpURs75XdKhMCrg&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Escape The Room</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="literaryeventcard">
                <Card.Img variant="top" src="https://im.rediff.com/300-300/getahead/2017/sep/26scrabblewords.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Word Bee</Card.Title>
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

export default LiteraryEventCard2
