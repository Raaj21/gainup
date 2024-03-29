// CateringComponent.js

import React from 'react';
import './CateringComponent.css'; // Import the CSS file
import TwoColumnLayout from './TwoColumnLayout';
import OurProduct from  './Ourproduct';
import GalleryImage from './GalleryImage'
import ContentWithBackground from './ContentWithBackground';
import HomeScreen from './HomeScreen';

class CateringComponent extends React.Component {
  render() {
    return (

    <div className="CateringComponent">
    <div class="blocks">
  <div class="block">
    <a href="#link">
      <div className='conr'>
        Yarn Division </div>
        
      <img src="https://omo-oss-image.thefastimg.com/portal-saas/new2022090610203186012/cms/image/9e6d1033-e13e-4f75-994b-c4c6cf75e92d.jpg" alt=""/>
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Socks Division</div>
      <img src="https://cpimg.tistatic.com//106315/6/template_photo_1.jpg" alt="" />
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Garment Division</div>
      <img src="https://www.cheersagarexports.com/wp-content/uploads/2020/03/womens-clothing.jpg" alt=""/>
    </a>
  </div>
  <div class="block">
    <a href="#link">
      <div className='conr'>Gloves Division</div>
      <img src="https://www.deelygloves.com/uploads/202238114/ImgScroll/ba202209021536350967974.jpg" alt=""/>
    </a>
  </div>
</div>
<TwoColumnLayout/>
<OurProduct/>
<GalleryImage/>
<HomeScreen/>

    </div>
    );
  }
}

export default CateringComponent;
