import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './GalleryImage.css'; // Import the CSS file containing the styles

const GalleryImage = () => {


  return (
    <div className="container-fluid">
      <Link to="/item1" className="photoLink" >
        <div id="item1" className="item red">
          <div className="color red">
            <i className="fab fa-yarn"></i>
          </div>
        </div>
      </Link>

      <Link to="/item2" className="photoLink">
        <div id="item2" className="item">
          <div className="color blue">
            <i className="fas fa-socks"></i>
          </div>
        </div>
      </Link>

      <Link to="/item3" className="photoLink">
        <div id="item3" className="item">
          <div className="color green">
            <i className="fas fa-tshirt"></i>
          </div>
        </div>
      </Link>

      <Link to="/item4" className="photoLink">
        <div id="item4" className="item">
          <div className="color grey">
            <i className="fas fa-hand-paper"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GalleryImage;