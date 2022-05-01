import React from 'react';
import './About.css';

function About() {
    return (
        <div className="tvyomstudentdetails">
            <div style={{textAlign:'left'}}>
                <h2>User Details:</h2>
                <h6>Name:</h6><span>Student name</span><br/>
                <h6>Roll No:</h6><span>Student Roll No.</span><br/>
                <h6>PID:</h6><span>Student PID</span><br/>
                <h6>Email:</h6><span>example@example.com</span><br/>
                <h6>Events Registered</h6>
                    <ul style={{display:'inline-block',position:'absolute',color:'black',lineHeight: '40px'}}>
                        <li>Event 1</li>
                        <li>Event 2</li>
                    </ul>
            </div>
        </div>
    )
}

export default About
