import React,{useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import DesignEventCard from './DesignEventCard';
import DesignEventCard2 from './DesignEventCard2';
import './DesignEvents.css'

function DesignEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="designevents">
            <Navbar/>
            <div className="sec1">
            <DesignEventCard/>
            </div>
            <div className="sec2">
            <DesignEventCard2/>
            </div>
        </div>
    )
}

export default DesignEvents
