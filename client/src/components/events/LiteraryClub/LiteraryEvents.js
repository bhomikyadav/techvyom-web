import React,{useEffect} from 'react';
import Navbar from '../../navbar/Navbar';
import LiteraryEventCard from './LiteraryEventCard';
import LiteraryEventCard2 from './LiteraryEventCard2';
import './LiteraryEvents.css';

function LiteraryEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="literaryevents">
            <Navbar/>
            <div className="sec1">
            <LiteraryEventCard/>
            </div>
            <div className="sec2">
            <LiteraryEventCard2/>
            </div>
        </div>
    )
}

export default LiteraryEvents
