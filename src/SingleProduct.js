

import React, { useState, useEffect, useRef } from 'react';

import img3 from './img/510X510/img1.jpg';
import img_580 from './img/580X580/img1.jpg';

import Swiper from 'react-id-swiper';







function SingleProduct() {
    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    const thumbnailSwiperParams = {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    };
    useEffect(() => {
      const gallerySwiper = gallerySwiperRef.current.swiper;
      const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
      if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, []);
    const images = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg"

          },
          {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg"

          },
          {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg"

          },
          {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg"

          },
          {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg"

          }
      ];
   
   
  return (
   
<>

<main id="main__content">

    <div className="bg-gray-13 bg-md-transparent">
        <div className="container">

            <div className="my-md-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                        <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a
                                href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page"><a href="#">Product Details</a></li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>

    <div className="container">

        <div className="mb-xl-14 mb-6">
            <div className="row">
                <div className="col-md-5 mb-4 mb-md-0">

                {/* <ul id="single__product__gallery">
                          
                          <li data-thumb={img3}> 
                              <a href={img3} data-fancybox="gallery" data-toggle="lightbox" data-max-width="600">
                              
                              <img className="img-fluid" src={img3}/>
                            </a>
                            
                            </li>
                        
                          <li data-thumb={img3}> 
                              <a href={img3} data-fancybox="gallery" data-toggle="lightbox" data-max-width="600">
                              
                              <img className="img-fluid" src={img3}/>
                            </a>
                            
                            </li>
                        
                          <li data-thumb={img3}> 
                              <a href={img3} data-fancybox="gallery" data-toggle="lightbox" data-max-width="600">
                              
                              <img className="img-fluid" src={img3}/>
                            </a>
                            
                            </li>
                        </ul> */}


<Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>

          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
        
        </Swiper>
        <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
          <div style={{ backgroundImage:'url(https://images.unsplash.com/photo-1656354891817-293ccb271d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }} />
       
        </Swiper>


                </div>
                <div className="col-md-7 mb-md-6 mb-lg-0">
                <div className="mb-2">
                            <div className="border-bottom mb-3 pb-md-1 pb-3">
                                <a href="#" className="font-size-12 text-gray-5 mb-2 d-inline-block">Headphones</a>
                                <h2 className="font-size-25 text-lh-1dot2">Ultra Wireless S50 Headphones S50 with Bluetooth</h2>
                                <div className="mb-2">
                                    <a className="d-inline-flex align-items-center small font-size-15 text-lh-1" href="#">
                                        <div className="text-warning mr-2">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="far fa-star text-muted"></small>
                                        </div>
                                        <span className="text-secondary font-size-13">(3 customer reviews)</span>
                                    </a>
                                </div>
                                <div className="d-md-flex align-items-center">
                                    <a href="#" className="max-width-150 ml-n2 mb-2 mb-md-0 d-block"><img className="img-fluid" src="/static/images/img/200X60/img1.png" alt="Image Description" /></a>
                                    <div className="ml-md-3 ml-4 text-gray-9 font-size-14">Availability: <span className="text-green font-weight-bold">26 in stock</span></div>
                                </div>
                                <div className="d-md-flex align-items-center">
                                    <div className="mt-2 text-gray-9 font-size-14">Get it between : <span className="font-weight-bold">June-11 to June-13</span></div>
                                  
                                </div>
                                <div className="d-md-flex align-items-center">
                                    <div className="text-green font-weight-bold font-size-16">Free Delivary</div>
                                  
                                </div>
                                <div className="d-md-flex align-items-center">
                                 <input type="tel" className="pincode__check border-0" placeholder="Enter your pincode" />
                                 <button className="btn mb-2 btn-outline-gray-1 ml-2 text-black">Check</button>
                                 <div className="ml-md-3 ml-4 text-gray-9 font-size-14">Available at <span className="text-green font-weight-bold">700024</span></div>
                                 <p>Oops! We are not currently servicing your area.</p>

                                  
                                </div>
                            </div>
               
                            <div className="mb-2">
                                <ul className="font-size-14 pl-3 ml-1 text-gray-110">
                                    <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                                    <li>Android 4.4 KitKat OS</li>
                                    <li>1.4 GHz Quad Core™ Processor</li>
                                    <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                                </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p><strong>SKU</strong>: FW511948218</p>
                            <div className="mb-4">
                                <div className="d-flex align-items-baseline">
                                    <ins className="font-size-26 text-decoration-none">Offer Price: $1,999.00</ins>
                                    <del className="font-size-20 ml-2 text-gray-6">MRP: $2,299.00</del>
                                </div>
                            </div>
                 
                            <div className="d-md-flex align-items-end mb-3">
                            
                                <div className="ml-md-3">
                                    <a href="#" className="btn px-5 btn-primary-dark transition-3d-hover"><i className="ec ec-add-to-cart mr-2 font-size-20"></i> Add to Cart</a>
                                </div>
                            </div>
                        </div>

                </div>

            </div>
        </div>
        {/* Single product tab */}
        <div className="mb-8">
                <div className="position-relative position-md-static px-md-6">
                    <ul className="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-0 pb-1 pb-xl-0 mb-n1 mb-xl-0" id="pills-tab-8" role="tablist">
                      
                        <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                            <a className="nav-link active" id="Jpills-two-example1-tab" data-bs-toggle="pill" data-bs-target="#Jpills-two-example1" role="tab" aria-controls="Jpills-two-example1" aria-selected="false">Description</a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                            <a className="nav-link" id="Jpills-three-example1-tab" data-bs-toggle="pill" data-bs-target="#Jpills-three-example1" role="tab" aria-controls="Jpills-three-example1" aria-selected="false">Specification</a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                            <a className="nav-link" id="Jpills-four-example1-tab" data-bs-toggle="pill" data-bs-target="#Jpills-four-example1" role="tab" aria-controls="Jpills-four-example1" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                </div>

                <div className="borders-radius-17 border p-4 mt-4 mt-md-0 px-lg-10 py-lg-9">
                    <div className="tab-content" id="Jpills-tabContent">
                       {/* All tab dibs here */}
                        <div className="tab-pane fade active show" id="Jpills-two-example1" role="tabpanel" aria-labelledby="Jpills-two-example1-tab">
                            <h3 className="font-size-24 mb-3">Perfectly Done</h3>
                            <p>Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="pt-lg-8 pt-xl-10">
                                        <h3 className="font-size-24 mb-3">Wireless</h3>
                                        <p className="mb-6">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                        <h3 className="font-size-24 mb-3">Fresh Design</h3>
                                        <p className="mb-6">Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper massa.</p>
                                        <h3 className="font-size-24 mb-3">Fabolous Sound</h3>
                                        <p className="mb-6">Cras rutrum, nibh a sodales accumsan, elit sapien ultrices sapien, eget semper lectus ex congue elit. Nullam dui elit, fermentum a varius at, iaculis non dolor. In hac habitasse platea dictumst.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <img className="img-fluid mr-n4 mr-lg-n10" src={img_580} alt="Image Description" />
                                </div>
                                <div className="col-md-6 text-left">
                                    <img className="img-fluid ml-n4 ml-lg-n10" src={img_580} alt="Image Description" />
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <div className="pt-lg-8 pt-xl-10 text-right">
                                        <h3 className="font-size-24 mb-3">Inteligent Bass</h3>
                                        <p className="mb-6">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                        <h3 className="font-size-24 mb-3">Battery Life</h3>
                                        <p className="mb-6">Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper massa.</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1"><strong>SKU:</strong> <span className="sku">FW511948218</span></li>
                                <li className="nav-item text-gray-111 mx-3 flex-shrink-0 flex-xl-shrink-1">/</li>
                                <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1"><strong>Category:</strong> <a href="#" className="text-blue">Headphones</a></li>


                            </ul>
                        </div>
                        <div className="tab-pane fade" id="Jpills-three-example1" role="tabpanel" aria-labelledby="Jpills-three-example1-tab">
                            <div className="mx-md-5 pt-1">
                                <div className="table-responsive mb-4">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td className="px-4 px-xl-5 border-top-0">Weight</td>
                                                <td className="border-top-0">7.25kg</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 px-xl-5">Dimensions</td>
                                                <td>90 x 60 x 90 cm</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 px-xl-5">Size</td>
                                                <td>One Size Fits all</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 px-xl-5">color</td>
                                                <td>Black witd Red, White witd Gold</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 px-xl-5">Guarantee</td>
                                                <td>5 years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                
                                <h3 className="font-size-18 mb-4">Technical Specifications</h3>
                             
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th className="px-4 px-xl-5 border-top-0">Brand</th>
                                                <td className="border-top-0">Apple</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Item Height</th>
                                                <td>18 Millimeters</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Item Width</th>
                                                <td>31.4 Centimeters</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Screen Size</th>
                                                <td>13 Inches</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Item Weight</th>
                                                <td>1.6 Kg</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Product Dimensions</th>
                                                <td>21.9 x 31.4 x 1.8 cm</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Item model number</th>
                                                <td>MF841HN/A</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Processor Brand</th>
                                                <td>Intel</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Processor Type</th>
                                                <td>Core i5</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Processor Speed</th>
                                                <td>2.9 GHz</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">RAM Size</th>
                                                <td>8 GB</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Hard Drive Size</th>
                                                <td>512 GB</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Hard Disk Technology</th>
                                                <td>Solid State Drive</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Graphics Coprocessor</th>
                                                <td>Intel Integrated Graphics</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Graphics Card Description</th>
                                                <td>Integrated Graphics Card</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Hardware Platform</th>
                                                <td>Mac</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Operating System</th>
                                                <td>Mac OS</td>
                                            </tr>
                                            <tr>
                                                <th className="px-4 px-xl-5">Average Battery Life (in hours)</th>
                                                <td>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="Jpills-four-example1" role="tabpanel" aria-labelledby="Jpills-four-example1-tab">
                            <div className="row mb-8">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <h3 className="font-size-18 mb-6">Based on 3 reviews</h3>
                                        <h2 className="font-size-30 font-weight-bold text-lh-1 mb-0">4.3</h2>
                                        <div className="text-lh-1">overall</div>
                                    </div>


                                    <ul className="list-unstyled">
                                        <li className="py-1">
                                            <a className="row align-items-center mx-gutters-2 font-size-1" href="#">
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="progress ml-xl-5 style1">
                                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-right">
                                                    <span className="text-gray-90">205</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-1">
                                            <a className="row align-items-center mx-gutters-2 font-size-1" href="#">
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="progress ml-xl-5 style1">
                                                        <div className="progress-bar ww-53" role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-right">
                                                    <span className="text-gray-90">55</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-1">
                                            <a className="row align-items-center mx-gutters-2 font-size-1" href="#">
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="progress ml-xl-5 style1">
                                                        <div className="progress-bar ww-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-right">
                                                    <span className="text-gray-90">23</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-1">
                                            <a className="row align-items-center mx-gutters-2 font-size-1" href="#">
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="progress ml-xl-5 style1">
                                                        <div className="progress-bar ww-0" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-right">
                                                    <span className="text-muted">0</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-1">
                                            <a className="row align-items-center mx-gutters-2 font-size-1" href="#">
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </div>
                                                <div className="col-auto mb-2 mb-md-0">
                                                    <div className="progress ml-xl-5 style1">
                                                        <div className="progress-bar ww-1" role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-right">
                                                    <span className="text-gray-90">4</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md-6">
                                    <h3 className="font-size-18 mb-5">Add a review</h3>

                                    <form className="js-validate">
                                        <div className="row align-items-center mb-4">
                                            <div className="col-md-4 col-lg-3">
                                                <label htmlFor="rating" className="form-label mb-0">Your Review</label>
                                            </div>
                                            <div className="col-md-8 col-lg-9">
                                                <a href="#" className="d-block">
                                                    <div className="text-warning text-ls-n2 font-size-16">
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="js-form-message form-group mb-3 row">
                                            <div className="col-md-4 col-lg-3">
                                                <label htmlFor="descriptionTextarea" className="form-label">Your Review</label>
                                            </div>
                                            <div className="col-md-8 col-lg-9">
                                                <textarea className="form-control" rows="3" id="descriptionTextarea"
                                                data-msg="Please enter your message."
                                                data-error-class="u-has-error"
                                                data-success-class="u-has-success"></textarea>
                                            </div>
                                        </div>
                                        <div className="js-form-message form-group mb-3 row">
                                            <div className="col-md-4 col-lg-3">
                                                <label htmlFor="inputName" className="form-label">Name <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-md-8 col-lg-9">
                                                <input type="text" className="form-control" name="name" id="inputName" aria-label="Alex Hecker" required
                                                data-msg="Please enter your name."
                                                data-error-class="u-has-error"
                                                data-success-class="u-has-success" />
                                            </div>
                                        </div>
                                        <div className="js-form-message form-group mb-3 row">
                                            <div className="col-md-4 col-lg-3">
                                                <label htmlFor="emailAddress" className="form-label">Email <span className="text-danger">*</span></label>
                                            </div>
                                            <div className="col-md-8 col-lg-9">
                                                <input type="email" className="form-control" name="emailAddress" id="emailAddress" aria-label="alexhecker@pixeel.com" required
                                                data-msg="Please enter a valid email address."
                                                data-error-class="u-has-error"
                                                data-success-class="u-has-success" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="offset-md-4 offset-lg-3 col-auto">
                                                <button type="submit" className="btn btn-primary-dark btn-wide transition-3d-hover">Add Review</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="border-bottom border-color-1 pb-4 mb-4">

                                <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="far fa-star text-muted"></small>
                                        <small className="far fa-star text-muted"></small>
                                    </div>
                                </div>


                                <p className="text-gray-90">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>


                                <div className="mb-2">
                                    <strong>John Doe</strong>
                                    <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                </div>

                            </div>


                            <div className="border-bottom border-color-1 pb-4 mb-4">

                                <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                    </div>
                                </div>


                                <p className="text-gray-90">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.</p>


                                <div className="mb-2">
                                    <strong>Anna Kowalsky</strong>
                                    <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                </div>

                            </div>
                         
                            <div className="pb-4">

                                <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                    <div className="text-warning text-ls-n2 font-size-16 ww-80">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="far fa-star text-muted"></small>
                                    </div>
                                </div>


                                <p className="text-gray-90">Sed id tincidunt sapien. Pellentesque cursus accumsan tellus, nec ultricies nulla sollicitudin eget. Donec feugiat orci vestibulum porttitor sagittis.</p>


                                <div className="mb-2">
                                    <strong>Peter Wargner</strong>
                                    <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                </div>

                            </div>

                        </div>
                      
                    </div>
                </div>

            </div>


       


    </div>




</main>



</>
  )
}

export default SingleProduct