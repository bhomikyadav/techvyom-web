import React from 'react';
import './OpenEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function OpenEventCard2() {
    return (
        <div className="opencard">
            <Card className="openeventcard">
                <Card.Img variant="top" src="https://www.infoplease.com/sites/infoplease.com/files/styles/large/public/2022-02/quiz-time.jpg?itok=mqTan5N-" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Tech Quiz</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="openeventcard">
                <Card.Img variant="top" src="https://img1.exportersindia.com/product_images/bc-small/2020/3/7120063/plc-programming-services-1583831563-5332110.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>PLC Designing</Card.Title>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="openeventcard">
                <Card.Img variant="top" src="https://blogs.3ds.com/northamerica/wp-content/uploads/sites/4/2020/08/3DPrint-Metal-Square-300x300.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white',textAlign:'center', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>3D Printing</Card.Title>
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

export default OpenEventCard2
