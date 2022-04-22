import React,{useEffect} from 'react';
import './OpenEvents.css'
import Navbar from '../../navbar/Navbar'
import OpenEventCard from './OpenEventCard';
import OpenEventCard2 from './OpenEventCard2';

function OpenEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="openevents">
            <Navbar/>
            <div className="sec1">
            <OpenEventCard2/>
            </div>
            <div className="sec2">
            <h2>Tech Gallery</h2>
            <OpenEventCard/>
            </div>
        </div>
    )
}

export default OpenEvents
