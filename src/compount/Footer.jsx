import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import app from '../assets/images/app.svg'
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import '../CUstom.css'


export const Footer = () => {
  return (
    <>
      <section className="footer_section mt-5">
        <div className="container footer_container py-4">
          <div className="row">
            <div className="col">
              
            </div>

            {/* last footer */}

            <div className="footer">
              <div className="inner_footer">
                <div className="one">
                  <ul>
                    <li>
                      <a href="#">
                        <h6 className="fw-bold">Real state</h6>
                      </a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Appartment</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Flats for rent</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Flats for sale</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Jobs</a>
                    </li>
                  </ul>
                </div>
                <div className="one">
                  <ul>
                    <li>
                      <a href="#">
                        <h6 className="fw-bold">Locations</h6>
                      </a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Bikes</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#"> Watches</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Books</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Dogs</a>
                    </li>
                  </ul>
                </div>
                <div className="one">
                  <ul>
                    <li>
                      <a href="#">
                        <h6 className="fw-bold">Explore</h6>
                      </a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">About EMPG</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">OLX Blog</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Contact Us</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">OLX for Businesses</a>
                    </li>
                  </ul>
                </div>
                <div className="one">
                  <ul>
                    <li>
                      <a href="#">
                        <h6 className="fw-bold">Hosting</h6>
                      </a>
                    </li>
                    <li>
                      <a className="fs-12" href="#"> Help</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Sitemap</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#">Terms of use</a>
                    </li>
                    <li>
                      <a className="fs-12" href="#"> Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="one">
                  <ul>
                    {/* <li>
                      <a href="#">
                        <h6 className="fw-bold">FOLLOW US</h6>
                      </a>
                    </li> */}
                    <ul style={{ display: "flex", padding: "0px" }}>
                      <li className="h4" style={{ padding: "5px", color: "black" }}>
                        <FaFacebook />
                      </li>
                      <li className="h4" style={{ padding: "5px", color: "black" }}>
                        <FaTwitter />
                      </li>
                      <li className="h4" style={{ padding: "5px", color: "black" }}>
                        <FaInstagram />
                      </li>
                    </ul>



                    <ul style={{ display: "flex", padding: "0px" }}>
                      <li id="footer_icon">
                        <img className="img-fluid" width="110px" src={appstore} alt="" />
                      </li>
                      <li id="footer_icon">
                        <img className="img-fluid" width="100px" src={googleplay} alt="" />
                      </li>
                    </ul>

                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
