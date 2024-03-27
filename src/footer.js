import React, { useEffect } from "react";
import "./footer.css";
import Aos from "aos";

import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="Footer">
        <div className="container text-center" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-lg-3 col-12">
              <a className="navbar-brand" href="/">
                <img
                  width="210"
                  height="75"
                  src="https://gainup.in/wp-content/uploads/2021/01/footer-logo.png"
                  class="attachment-full size-full"
                  alt=""
                  decoding="async"
                />
              </a>
              <p style={{ margin: 31, fontSize: "20px", fontWeight: 600 }}>
                A name synonymous with quality and excellence for over two
                decades.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 col-12 ft-2">
              <h4>Best Services</h4>
              <ul>
                <li class="nav-item">
                  <a class="" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="/">
                    Corporate Presentation
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="/">
                    Green Power
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="/">
                    Accolades
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="/">
                    Career
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-3 col-12 ft-2">
              <h4>Brochure</h4>

              <ul>
                <li class="nav-item">
                  <img
                    fetchpriority="high"
                    width="117"
                    height="148"
                    src="https://gainup.in/wp-content/uploads/2021/01/img1-1.jpg"
                    class="attachment-full"
                    alt=""
                    decoding="async"
                    srcset="https://gainup.in/wp-content/uploads/2021/01/img1-1.jpg 300w, 
                https://gainup.in/wp-content/uploads/2021/01/img1-1-215x300.jpg 215w"
                  />

                  <div class="icon-content">
                    <h4>
                      <a
                        href="https://gainup.in/wp-content/uploads/2021/04/gainup-brochure-min.pdf"
                        title="Brochure Download"
                        target=" _blank"
                      >
                        Download
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-3">
              <h4>Contact Us</h4>
              <div className="location-info">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="addressalign">
                  13/341, Dindigul – Batlagundu Highway, Ottupatti Post,
                  Dindigul (Dist), Tamil Nadu, Pincode – 624 708, INDIA.
                </p>
              </div>
              <div className="contact-info">
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <p>+92 3121324083</p>
              </div>
              <div className="contact-info">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>waleedishfaq1515@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>© 2024. All Rights Reserved by Gainup Industries India Pvt. Ltd.</p>
      </div>
    </>
  );
};

export default Footer;
