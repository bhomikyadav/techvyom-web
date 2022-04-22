import React,{useEffect} from 'react';
import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3';
import Card4 from '../Card/Card4';
import Cards from '../Card/Cards';
import './Homepage.css';

function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="homepage">
            <h1>Events Presented</h1>
            <h2 style={{marginTop:'50px'}}>Branch-wise Events</h2>
            <div className="cards">
            <Cards/>
            </div>
            <div className="cards">
            <Card2/>
            </div>
            <h2>Events organised by common clubs</h2>
            <div className="cards">
            <Card3/>
            </div>
            <div className="cards">
            <Card4/>
            </div>
        </div>
    )
}

export default Homepage
