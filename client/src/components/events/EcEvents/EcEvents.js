import React,{useEffect} from 'react'
import Navbar from '../../navbar/Navbar'
import EcEventCard from './EcEventCard';
import EcEventCard2 from './EcEventCard2';
import './EcEvents.css';

function EcEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="ecevents">
            <Navbar/>
            <div className="sec1">
            <EcEventCard/>
            </div>
            <div className="sec2">
            <EcEventCard2/>
            </div>
        </div>
    )
}

export default EcEvents
