// CateringComponent.js

import React from 'react';
import './CateringComponent.css'; // Import the CSS file
import TwoColumnLayout from './TwoColumnLayout';
import OurProduct from  './Ourproduct';
import GalleryImage from './GalleryImage'

class CateringComponent extends React.Component {
  render() {
    return (

    <>
    <div class="blocks">
  <div class="block">
    <a href="#link">
      <div className='conr'>
        Yarn Division </div>
        
      <img src="https://www.gannett-cdn.com/presto/2020/02/25/USAT/940dfe56-9479-417f-b5b0-d69846c1f64a-GettyImages-535771789.jpg?crop=5312%2C2988%2Cx0%2Cy1249&amp;width=1200" alt=""/>
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Socks Division</div>
      <img src="https://www.tapeciarnia.pl/tapety/normalne/268185_gory_lasy_laki_kwiaty_tecza_promienie_slonca.jpg" alt="" />
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Garment Division</div>
      <img src="https://www.gannett-cdn.com/presto/2020/02/25/USAT/940dfe56-9479-417f-b5b0-d69846c1f64a-GettyImages-535771789.jpg?crop=5312%2C2988%2Cx0%2Cy1249&amp;width=1200" alt=""/>
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Gloves Division</div>
      <img src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696602055_gas-kvas-com-p-kartinki-s-prirodoi-13.jpg" alt=""/>
    </a>
  </div>
</div>
<TwoColumnLayout/>
<OurProduct/>
<GalleryImage/>
    </>
    );
  }
}

export default CateringComponent;
