import React,{useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import EnEventCard from './EnEventCard';
import EnEventCard2 from './EnEventCard2';
import './EnEvents.css'

function EnEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="enevents">
            <Navbar/>
            <div className="sec1">
            <EnEventCard/>
            </div>
            <div className="sec2">
            <EnEventCard2/>
            </div>
        </div>
    )
}

export default EnEvents
