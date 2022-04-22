import React from 'react';
import './EcEventCard.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function EcEventCard2() {
    return (
        <div className="eccard">
            <Card className="eceventcard">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUtHofiBQ_8zFBi5WRmQbjrlqhqO7Tr1x-w&usqp=CAU" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Robot Soccer</Card.Title>
                    <Card.Text>Build a robot that can play football by ball passing or dragging in goal post</Card.Text>
                    <div class="registerdiv">
                    <Link to="register">
                    <button class="regbtn">
                    Register
                    </button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="eceventcard">
                <Card.Img variant="top" src="https://raw.githubusercontent.com/exciteabletom/mazesolver/master/pics/upscaled_maze.jpg" style={{height:'250px'}}/>
                <Card.Body style={{ color:'white', background: 'linear-gradient(to bottom left, #000066 0%, #9900cc 100%)'}}>
                    <Card.Title>Maze Solver</Card.Title>
                    <Card.Text>Solve the maze in shortest time</Card.Text>
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

export default EcEventCard2
