import React from 'react';
import './ContentWithBackground.css'; // Import CSS file for styling

const ContentWithBackground = () => {
  return (
    <div className="content-container">
      <div className="background-imag"></div>
      <div className="content">
      <img
        loading="lazy"
        decoding="async"
        width="131"
       
        src="https://gainup.in/wp-content/uploads/2021/01/logo.png"
        className="vc_single_image-img attachment-full"
        alt=""
      />
  
    </div>
      <div className="content">
        {/* Your content goes here */}
        
        <h1>Take care of employees who are taking care of our business!</h1>
     
      </div>
      <div className="content">   <p>One of the biggest socks manufacturers in India capable of knitting Socks for Men, Women, Children in variety of needle counts and styling..</p></div>
    </div>
  );
}

export default ContentWithBackground;
