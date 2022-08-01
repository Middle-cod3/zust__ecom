import React from 'react';

import Slider from "react-slick";

// import Swiper core and required modules
import SwiperCore,{A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img3 from '../img/300X300/img1.jpg';
import { Link } from 'react-router-dom';

function MainBanner() {



// Settings for slick carousel
  var settings={
    infinite: true,
    loop: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    fade: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
 
  return (
   <>

    <main id="main__content">

        <section id="main__carousel__section">

            <Slider {...settings}>
                <div className="">
                    <a href=""><img className="w-100" src="https://khoslaonline.com/wp-content/uploads/2022/06/1350X300-3-0x0.jpg" /></a>
                </div>
                <div className="">
                    <a href=""> <img className="w-100" src="https://khoslaonline.com/wp-content/uploads/2022/04/11544_QLED_Registration_Banner_1350x300-0x0.jpg" /></a>
                </div>
                <div className="">
                    <a href=""> <img className="w-100" src="https://khoslaonline.com/wp-content/uploads/2022/06/12093_Ref_Campaign_SDP_Banner_1350x300-0x0.jpg" /></a>
                </div>
                <div className="">
                    <a href=""> <img className="w-100" src="https://khoslaonline.com/wp-content/uploads/2022/06/banner-11350-x-300-0x0.png" /></a>
                </div>
                <div className="">
                    <a href=""> <img className="w-100" src="https://khoslaonline.com/wp-content/uploads/2022/06/NO_COST_EMI_BANNER_1-01-0x0.jpg" /></a>
                </div>
               
            </Slider>
        </section>

        {/* Category carousel */}
        <div className="container mt-1 mb-3 secondary__slider">
                <div className="swiper main__second__slider">
                    <div className="swiper-wrapper">
                      <Swiper
                         // install Swiper modules
                         modules={[Autoplay, A11y]}
                         spaceBetween={15}
                         slidesPerView={4}
                         autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}

                        loop={true}
                        speed={5000}
                        breakpoints= {{
                          575: {
                            width:575,
                            slidesPerView: 4,
                         
                          },
                          640: {
                            width:640,
                            slidesPerView: 4,
                         
                          },
                          768: {
                            width:768,
                            slidesPerView: 5,
                           
                          },
                          1024: {
                            width:1024,
                            slidesPerView: 6,
                         
                          },
                        }}
                      
                      >
                       
                   

                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1-12_Ayq5Xht.png" />
                                <h6>Refrigerator</h6>
                            </a></div>
                            </SwiperSlide>
                       <SwiperSlide> <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_Mobile_784q8lp.png" />
                                <h6>Mobile</h6>
                            </a></div></SwiperSlide>

                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="	https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_fan_UbLdfsJ.png" />
                                <h6>Home Appliances</h6>
                            </a></div>
                            </SwiperSlide>
                       <SwiperSlide> <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_microwave_S7WUgvw.png" />
                                <h6>Kitchen Appliances</h6>
                            </a></div></SwiperSlide>

                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_bluetooth_speakers_gcGCLeR.png" />
                                <h6>Home Entertainment</h6>
                            </a></div>
                            </SwiperSlide>
                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_AC_9l4Nc1Z.png" />
                                <h6>Air Conditioner</h6>
                            </a></div>
                            </SwiperSlide>
                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_tv_76CKeIt.png" />
                                <h6>Television</h6>
                            </a></div>
                            </SwiperSlide>
                            <SwiperSlide>
                        <div className="swiper-slide"><a href=""> <img className="w-100"
                                    src="https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/fit-in/120x120/images/1_washing_machine_IMkruDn.png" />
                                <h6>Washing Machine</h6>
                            </a></div>
                            </SwiperSlide>
                     

                      </Swiper>
                    </div>
                  
                </div>

            </div>

        {/* Top Selling Header */}
    <section className="heading__section grey__backfill">
        <div className="container heading__section__header">
            <button className="btn text-uppercase">Top Selling</button>
            <a href="#" className="btn text-uppercase float-end view__all">View all</a>
        </div>
    </section> 
    {/* Top Selling Card Carousel */}
    <section className="top__selling__cards grey__backfill">

<div className="container">
    <div className="top__selling__carousel">
    <OwlCarousel items={4}  
          className="owl-theme"  
          loop  
          nav  
          margin={8}
          autoplay={true}
          smartSpeed= {2000}
          autoplayTimeout= {3000}
        autoplayHoverPause= {true}
          responsive= {{
            0: {
              items: 1
              // nav: true
            },
            480: {
              items: 2,
              nav: true
            },
            768: {
              items: 3,
              // nav: true,
              loop: true
            },
            992: {
              items: 3,
              // nav: true,
              loop: true
            }
            ,
            1080: {
              items: 4,
              // nav: true,
              loop: true
            }
          }} 
          responsiveRefreshRate= {200}>



        <article className="thumbnail item m-1">
            <Link to="/single__product">

            <div className="contenedorCards">
                <div className="card">
                    <div className="wrapper">
                        <div className="colorProd"><span>30% Off</span></div>
                        <div className="imgProd" style={{ backgroundImage: `url(${img3})` }}></div>

                        <div className="infoProd">
                            <p className="nombreProd">Voltas Beko Dishwasher</p>
                            <p className="extraInfo">Stock Available</p>
                            <div className="actions">
                                <div className="preciosGrupo">
                                    <p className="precio offerPrice">Offer Price &#8377;<span>38,990</span></p>
                                    <p className="precio mrp">MRP &#8377;<span>60,990</span>
                                    </p>
                                </div>
                            </div>
                            <button className="btn text-center add__cart__btn"> Add
                                Cart <i className='bi bi-cart3'></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
        </article>

        <article className="thumbnail item m-1">
            <Link to="/single__product">
            <div className="contenedorCards">
                <div className="card">
                    <div className="wrapper">
                        <div className="colorProd"><span>25% Off</span></div>

                        <div className="imgProd" style={{ backgroundImage: `url(${img3})` }}></div>



                        <div className="infoProd">
                            <p className="nombreProd">Lloyd 1.5 Ton Ac</p>
                            <p className="extraInfo2">Out Of Stock</p>
                            <div className="actions">
                                <div className="preciosGrupo">
                                    <p className="precio offerPrice">Offer Price &#8377;<span>38,990</span></p>
                                    <p className="precio mrp">MRP &#8377;<span>60,990</span>
                                    </p>
                                </div>
                            </div>
                            <button className="btn text-center add__cart__btn">Add
                                Cart <i className='bi bi-cart3'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </article>
        </OwlCarousel>
    </div>
</div>
</section>

{/* Secure payment section */}
<section className="shipping_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shipping_block">
                            <div className=" row ">
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="single_shipping">
                                        <div className="shipping_icone">
                                            <i className='bx bxs-truck'></i>
                                        </div>
                                        <div className="shipping_content">
                                            <h2><strong>Free Shipping</strong></h2>
                                            <p className='text-black'>Free shipping on all orders</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_shipping">
                                        <div className="shipping_icone">
                                            <i className='bx bx-headphone'></i>
                                        </div>
                                        <div className="shipping_content">
                                            <h2><strong>Support 24/7</strong></h2>

                                            <p className='text-black'>Contact us 24 hours a day</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single_shipping">
                                        <div className="shipping_icone">
                                            <i className='bx bx-lock-alt'></i>
                                        </div>
                                        <div className="shipping_content">
                                            <h2><strong>Payment Secure</strong></h2>
                                            <p className='text-black'>We ensure secure payment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



</main>
   
   
   
   </>
  )
}

export default MainBanner