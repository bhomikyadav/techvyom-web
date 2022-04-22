import React,{useEffect} from 'react';
import './MeEvents.css'
import Navbar from '../../navbar/Navbar'
import MeEventCard from './MeEventCard';
import MeEventCard2 from './MeEventCard2'

function MeEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="meevents">
            <Navbar/>
            <div className="sec1">
                <MeEventCard/>
            </div>
            <div className="sec2">
                <MeEventCard2/>
            </div>
        </div>
    )
}

export default MeEvents
