import React from 'react';
import './DesignEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function DesignEventCard2() {
    return (
        <div className="designcard">
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://content.instructables.com/ORIG/FDP/BLI7/JC0U7DVC/FDPBLI7JC0U7DVC.jpg?auto=webp&fit=bounds&frame=1&auto=webp&frame=1&height=300" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Best Out of Waste</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="designeventcard">
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0024/7162/4762/products/FeatherQuillPen-All_300x.png?v=1637767066" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Quill The Techvyom</Card.Title>
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

export default DesignEventCard2
