import React from 'react';
import Checked from '../components/Checked';
import '../App.css';
import MyUseEffect from '../components/MyUseEffect';
import StarRating from '../components/StarRating';
import FetchData from '../components/FetchData';

const HomeScreen = () => {
    return (
        <div className="app-wrapper">
            <MyUseEffect />
            <br />
            <StarRating totalStars={5} />
           <Checked /> 
           <FetchData />
        </div>
    )
}

export default HomeScreen
