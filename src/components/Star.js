import React from 'react';
import { FaStar } from "react-icons/fa";


const Star = ({ selected = false, onSelect }) => {
    return (
        <FaStar color={selected ? "orange" : "grey"} onClick={onSelect} />
    )
}

export default Star
