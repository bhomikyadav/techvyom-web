import React,{useEffect} from 'react';
import './MRCEvents.css';
import Navbar from '../../navbar/Navbar'
import MRCEventCard from './MRCEventCard';

function MRCEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="mrcevents">
            <Navbar/>
            <div className="sec1">
                <MRCEventCard/>
            </div>
        </div>
    )
}

export default MRCEvents
