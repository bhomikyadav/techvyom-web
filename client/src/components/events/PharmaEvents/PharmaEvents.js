import React,{useEffect} from 'react'
import Navbar from '../../navbar/Navbar';
import PharmaEventCard from './PharmaEventCard';
import PharmaEventCard2 from './PharmaEventCard2';
import './PharmaEvents.css'

function PharmaEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="pharmaevents">
            <Navbar/>
            <div className="sec1">
                <PharmaEventCard/>
            </div>
            <div className="sec2">
                <PharmaEventCard2/>
            </div>
        </div>
    )
}

export default PharmaEvents
