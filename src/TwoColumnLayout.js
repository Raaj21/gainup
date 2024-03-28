import React from 'react';
import './TwoColumnLayout.css'; // You can create this CSS file to style your components

function TwoColumnLayout() {
    return (
        <div className="container-fuild">
            <div className="column">
                <div className="box">
                    <h2>Our Group</h2>
                    <p>Highly experienced management team, reinforced with strong technical team lead by experts in each division with experience of more than 15 years in manufacturing, hasquality standard. Gainup following LEAN manufacturing system in production and it has implemented 5S quality system in all division.</p>  
                    <button className='example_d'>Read more</button>
                </div>
            </div>
            <div className="column">
                <div className="box">
                    <h2>Green Power</h2>
                    <p>Gainup has established Green Power generation by installing WIND MILLS with installed capacity of more than 5.6 MW and BIO-GAS plant for all canteen cooking purpose. Our total power consumption is met by our own WIND MILL power and proud to be part of global initiative on GREEN POWER.</p>
                    <button className='example_d'>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default TwoColumnLayout;
