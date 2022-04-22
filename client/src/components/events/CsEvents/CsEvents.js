import React,{useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import CsEventCard from './CsEventCard';
import CsEventCard2 from './CsEventCard2';
import './CsEvents.css';

function CsEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="csevents">
            <Navbar/>
            <div className="sec1">
            <h1 style={{textAlign:'center',fontWeight:'700'}}>CS-IT Events</h1>
            <CsEventCard/>
            </div>
            <div className="sec2">
            <CsEventCard2/>
            </div>
        </div>
    )
}

export default CsEvents
