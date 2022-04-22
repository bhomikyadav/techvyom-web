import React,{useEffect} from 'react'
import './LANWarEvents.css'
import Navbar from '../../navbar/Navbar'
import LANWarEventCard from './LANWarEventCard'

function LANWarEvents() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="lanwarevents">
            <Navbar/>
            <div className="sec1">
                <LANWarEventCard/>
            </div>
        </div>
    )
}

export default LANWarEvents
