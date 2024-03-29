import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import contactImage from './images/contact.png';
function ContactInfo() {
  return (
     <div 
    style={{
      backgroundImage: `url(${contactImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    > 
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className='map'>
        <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22212.439220348948!2d77.79549171223792!3d10.209732162555932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0751d9528026ef%3A0xb4dd4ba5dea44704!2sGain%20up%20industries%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1611284466504!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      aria-hidden="false"
                      tabIndex="0"
                    >
              </iframe>    
              </div>    
              </div>
        <div className="col-md-6">
          <div className='address'>
          <h2>Gainup Industries India Pvt. Ltd.</h2>
          <div className='add1'>
            
            <p><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />#13/341, Dindigul – Batlagundu Highway, Sitharevu Village, Ottupatti Post, Dindigul (Dist), Tamil Nadu, Pincode – 624 708, INDIA.</p>
          </div>
          <div>
            
            <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />+91 04543 269000</p>
          </div>
          <div>
                  <p>  <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />+91 9842133371</p>
                </div>
                <div>
                 
                  <p> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /><a className='mail' href="mailto:reception@gainup.in">reception@gainup.in</a></p>
                </div>

            </div>
        </div>
      </div>

    </div>
     <div className="container">
     <div className="row">
       <div className="col-lg-4">
         <div className="contact-box">
           <h4>Mr. S. Dwarakanathan</h4>
           <p>Managing Director</p>
           <div className="contact-info">
             <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
             <a href="mailto:md@gainup.in">md@gainup.in</a>
           </div>
         </div>
       </div>
       <div className="col-sm-4">
         <div className="contact-box">
           <h4>Mr. Joseph Muthaiyan. L</h4>
           <p>Chief Executive Officer</p>
           <div className="contact-info">
             <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
             <a href="mailto:ceo@gainup.in">ceo@gainup.in</a>
           </div>
         </div>
       </div>
       <div className="col-sm-4">
         <div className="contact-box">
           <h4>Mr. D. Perumal Samy</h4>
           <p>Chief Operating Officer</p>
           <div className="contact-info">
             <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
             <a href="mailto:samy@gainup.in">samy@gainup.in</a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="contact-box">
            <h4>Mr. Murugapandi</h4>
            <p>Senior Sales Manager</p>
            <div className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
              <a href="mailto:Murugapandi.m@gainup.in">Murugapandi.m@gainup.in</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="contact-box">
            <h4>Mr. Rajesh Kannan. A</h4>
            <p>Asst. General Manager</p>
            <div className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
              <a href="mailto:Rajesh.a@gainup.in">Rajesh.a@gainup.in</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="contact-box">
            <h4>Mr. Sudhakar S G</h4>
            <p>Asst. General Manager</p>
            <div className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
              <a href="mailto:sudhakar.sg@gainup.in">sudhakar.sg@gainup.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactInfo;
