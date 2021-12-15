import React from 'react';
import NavBar from './NavBar';
import './DigitalCard.css'

export default function DigitalCard(props) {
    return (
        <div className="DigitalCard">
            <NavBar />
    <h1 className="text-center">Digital Card</h1>
		<h3 className="barcode-font text-center">2705112545587</h3>
    <p className="text-center">Click here to order a replacement card</p>
    </div>
    )
}