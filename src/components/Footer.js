import React from 'react';
import Logo from '../ZUST_logo_new.png'

function Footer() {
  return (
<>
<footer id="footer" className="footer">

<div className="footer-content">
    <div className="container">
        <div className="row">

            <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                    <h3><a href=""><img src={Logo}width="200px" alt="" /></a></h3>

                    <div className="row">
                        <div className="col-lg-2">
                            <i className="bi bi-headphones"></i>
                        </div>
                        <div className="col-lg-10">
                            <p>For any Enquire contact us!<br/>
                                1800015200</p>
                        </div>
                    </div>
                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-youtube"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>

                    </div>
                  
                </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
                <h4>Information</h4>
                <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">

                <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Home Appliances</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Kitchen Appliances</a></li>

                </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
                <h4>Product Categories</h4>
                <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Air Conditioners</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Refrigerators</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Mobiles</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Laptop</a></li>

                </ul>
            </div>

        </div>
    </div>
</div>

<div className="footer-legal text-center">
    <div
        className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="copyright">
                &copy; <strong><span>ZUST</span></strong>. All Rights Reserved
            </div>
            <div className="credits">

                Developed by <a href="#">Ayan</a>
            </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="#top"><i className="bi bi-arrow-up-square text-white font-size-28"></i></a>
           


        </div>

    </div>
</div>

</footer>




</>
  )
}

export default Footer