import React from 'react';
import img1 from './img/212X200/img1.jpg';

function Product() {
  return (
<>

<main id="main__content">

    <div className="bg-gray-13 bg-md-transparent">
        <div className="container">

            <div className="my-md-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                        <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a
                                href="../home/index.html">Home</a></li>
                        <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Air
                                Conditioner</a></li>


                    </ol>
                </nav>
            </div>

        </div>
    </div>


    <div className="container">
        <div className="row mb-8">
            <div className="col-xl-12 colwd-9gdot5">



                <div className="d-block d-md-flex flex-center-between mb-3">
                    <h3 className="font-size-25 mb-2 mb-md-0">Air Conditioners</h3>

                </div>


                <div className="bg-gray-1 flex-center-between borders-radius-9 py-1">

                    <div className="px-3">
                        <ul className="nav nav-tab-shop" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-two-example1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-two-example1" role="tab" aria-controls="pills-two-example1"
                                    aria-selected="false">
                                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                                        <i className="fa fa-align-justify"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-three-example1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-three-example1" role="tab"
                                    aria-controls="pills-three-example1" aria-selected="true">
                                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                                        <i className="fa fa-list"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>



                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade pt-2 show active" id="pills-two-example1" role="tabpanel"
                        aria-labelledby="pills-two-example1-tab" data-target-group="groups">
                        <ul className="row list-unstyled products-group no-gutters">
                            <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                                <div className="product-item__outer h-100">
                                    <div className="product-item__inner px-xl-4 p-3">
                                        <div className="product-item__body pb-xl-2">
                                            <div className="mb-2"><a
                                                    href="../shop/product-categories-7-column-full-width.html"
                                                    className="font-size-12 text-gray-5">Speakers</a></div>
                                            <h5 className="mb-1 product-item__title"><a
                                                    href="../shop/single-product-fullwidth.html"
                                                    className="text-blue font-weight-bold">Wireless Audio System
                                                    Multiroom 360 degree Full base audio</a></h5>
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                            <div className="mb-3">
                                                <a className="d-inline-flex align-items-center small font-size-14"
                                                    href="#">
                                                    <div className="text-warning mr-2">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                    <span className="text-secondary">(40)</span>
                                                </a>
                                            </div>
                                            <ul className="font-size-12 p-0 text-gray-110 mb-4">
                                                <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality
                                                </li>
                                                <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality,
                                                    durable EVA crush resistant, anti-shock material.</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                    megapixel CMOS rear camera</li>
                                            </ul>
                                            <div className="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
                                            <div className="flex-center-between mb-1">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className=" prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn-add-cart btn-primary transition-3d-hover"><i
                                                            className="ec ec-add-to-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                                <div className="product-item__outer h-100">
                                    <div className="product-item__inner px-xl-4 p-3">
                                        <div className="product-item__body pb-xl-2">
                                            <div className="mb-2"><a
                                                    href="../shop/product-categories-7-column-full-width.html"
                                                    className="font-size-12 text-gray-5">Speakers</a></div>
                                            <h5 className="mb-1 product-item__title"><a
                                                    href="../shop/single-product-fullwidth.html"
                                                    className="text-blue font-weight-bold">Tablet White EliteBook
                                                    Revolve 810 G2</a></h5>
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                            <div className="mb-3">
                                                <a className="d-inline-flex align-items-center small font-size-14"
                                                    href="#">
                                                    <div className="text-warning mr-2">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                    <span className="text-secondary">(40)</span>
                                                </a>
                                            </div>
                                            <ul className="font-size-12 p-0 text-gray-110 mb-4">
                                                <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality
                                                </li>
                                                <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality,
                                                    durable EVA crush resistant, anti-shock material.</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                    megapixel CMOS rear camera</li>
                                            </ul>
                                            <div className="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
                                            <div className="flex-center-between mb-1">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn-add-cart btn-primary transition-3d-hover"><i
                                                            className="ec ec-add-to-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
                                <div className="product-item__outer h-100">
                                    <div className="product-item__inner px-xl-4 p-3">
                                        <div className="product-item__body pb-xl-2">
                                            <div className="mb-2"><a
                                                    href="../shop/product-categories-7-column-full-width.html"
                                                    className="font-size-12 text-gray-5">Speakers</a></div>
                                            <h5 className="mb-1 product-item__title"><a
                                                    href="../shop/single-product-fullwidth.html"
                                                    className="text-blue font-weight-bold">Purple Solo 2 Wireless</a>
                                            </h5>
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                            <div className="mb-3">
                                                <a className="d-inline-flex align-items-center small font-size-14"
                                                    href="#">
                                                    <div className="text-warning mr-2">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                    <span className="text-secondary">(40)</span>
                                                </a>
                                            </div>
                                            <ul className="font-size-12 p-0 text-gray-110 mb-4">
                                                <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality
                                                </li>
                                                <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality,
                                                    durable EVA crush resistant, anti-shock material.</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                    megapixel CMOS rear camera</li>
                                            </ul>
                                            <div className="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
                                            <div className="flex-center-between mb-1">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn-add-cart btn-primary transition-3d-hover"><i
                                                            className="ec ec-add-to-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li
                                className="col-6 col-md-3 col-wd-2gdot4 product-item remove-divider-md-lg remove-divider-xl">
                                <div className="product-item__outer h-100">
                                    <div className="product-item__inner px-xl-4 p-3">
                                        <div className="product-item__body pb-xl-2">
                                            <div className="mb-2"><a
                                                    href="../shop/product-categories-7-column-full-width.html"
                                                    className="font-size-12 text-gray-5">Speakers</a></div>
                                            <h5 className="mb-1 product-item__title"><a
                                                    href="../shop/single-product-fullwidth.html"
                                                    className="text-blue font-weight-bold">Smartphone 6S 32GB LTE</a>
                                            </h5>
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                            <div className="mb-3">
                                                <a className="d-inline-flex align-items-center small font-size-14"
                                                    href="#">
                                                    <div className="text-warning mr-2">
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="fas fa-star"></small>
                                                        <small className="far fa-star text-muted"></small>
                                                    </div>
                                                    <span className="text-secondary">(40)</span>
                                                </a>
                                            </div>
                                            <ul className="font-size-12 p-0 text-gray-110 mb-4">
                                                <li className="line-clamp-1 mb-1 list-bullet">Brand new and high quality
                                                </li>
                                                <li className="line-clamp-1 mb-1 list-bullet">Made of supreme quality,
                                                    durable EVA crush resistant, anti-shock material.</li>
                                                <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                    megapixel CMOS rear camera</li>
                                            </ul>
                                            <div className="text-gray-20 mb-2 font-size-12">SKU: FW511948218</div>
                                            <div className="flex-center-between mb-1">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn-add-cart btn-primary transition-3d-hover"><i
                                                            className="ec ec-add-to-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel"
                        aria-labelledby="pills-three-example1-tab" data-target-group="groups">
                        <ul className="d-block list-unstyled products-group prodcut-list-view">
                            <li className="product-item remove-divider">
                                <div className="product-item__outer w-100">
                                    <div className="product-item__inner remove-prodcut-hover py-4 row">
                                        <div className="product-item__header col-6 col-md-4">
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                        </div>
                                        <div className="product-item__body col-6 col-md-5">
                                            <div className="pr-lg-10">
                                                <div className="mb-2"><a
                                                        href="../shop/product-categories-7-column-full-width.html"
                                                        className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-2 product-item__title"><a
                                                        href="../shop/single-product-fullwidth.html"
                                                        className="text-blue font-weight-bold">Wireless Audio System
                                                        Multiroom 360 degree Full base audio</a></h5>
                                                <div className="prodcut-price mb-2">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">Add
                                                        to cart</a>
                                                </div>
                                                <div className="mb-3 d-none d-md-block">
                                                    <a className="d-inline-flex align-items-center small font-size-14"
                                                        href="#">
                                                        <div className="text-warning mr-2">
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                        <span className="text-secondary">(40)</span>
                                                    </a>
                                                </div>
                                                <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                    <li className="line-clamp-1 mb-1 list-bullet">Brand new and high
                                                        quality</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">Made of supreme
                                                        quality, durable EVA crush resistant, anti-shock material.</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                        megapixel CMOS rear camera</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="product-item remove-divider">
                                <div className="product-item__outer w-100">
                                    <div className="product-item__inner remove-prodcut-hover py-4 row">
                                        <div className="product-item__header col-6 col-md-4">
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                        </div>
                                        <div className="product-item__body col-6 col-md-5">
                                            <div className="pr-lg-10">
                                                <div className="mb-2"><a
                                                        href="../shop/product-categories-7-column-full-width.html"
                                                        className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-2 product-item__title"><a
                                                        href="../shop/single-product-fullwidth.html"
                                                        className="text-blue font-weight-bold">Wireless Audio System
                                                        Multiroom 360 degree Full base audio</a></h5>
                                                <div className="prodcut-price mb-2">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">Add
                                                        to cart</a>
                                                </div>
                                                <div className="mb-3 d-none d-md-block">
                                                    <a className="d-inline-flex align-items-center small font-size-14"
                                                        href="#">
                                                        <div className="text-warning mr-2">
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                        <span className="text-secondary">(40)</span>
                                                    </a>
                                                </div>
                                                <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                    <li className="line-clamp-1 mb-1 list-bullet">Brand new and high
                                                        quality</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">Made of supreme
                                                        quality, durable EVA crush resistant, anti-shock material.</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                        megapixel CMOS rear camera</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="product-item remove-divider">
                                <div className="product-item__outer w-100">
                                    <div className="product-item__inner remove-prodcut-hover py-4 row">
                                        <div className="product-item__header col-6 col-md-4">
                                            <div className="mb-2">
                                                <a href="../shop/single-product-fullwidth.html"
                                                    className="d-block text-center"><img className="img-fluid"
                                                        src={img1}
                                                        alt="Image Description" /></a>
                                            </div>
                                        </div>
                                        <div className="product-item__body col-6 col-md-5">
                                            <div className="pr-lg-10">
                                                <div className="mb-2"><a
                                                        href="../shop/product-categories-7-column-full-width.html"
                                                        className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-2 product-item__title"><a
                                                        href="../shop/single-product-fullwidth.html"
                                                        className="text-blue font-weight-bold">Wireless Audio System
                                                        Multiroom 360 degree Full base audio</a></h5>
                                                <div className="prodcut-price mb-2">
                                                    <div className="text-gray-100">$685,00</div>
                                                </div>
                                                <div className="prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html"
                                                        className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">Add
                                                        to cart</a>
                                                </div>
                                                <div className="mb-3 d-none d-md-block">
                                                    <a className="d-inline-flex align-items-center small font-size-14"
                                                        href="#">
                                                        <div className="text-warning mr-2">
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                        <span className="text-secondary">(40)</span>
                                                    </a>
                                                </div>
                                                <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                                                    <li className="line-clamp-1 mb-1 list-bullet">Brand new and high
                                                        quality</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">Made of supreme
                                                        quality, durable EVA crush resistant, anti-shock material.</li>
                                                    <li className="line-clamp-1 mb-1 list-bullet">20 MP Electro and 28
                                                        megapixel CMOS rear camera</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>






            </div>
        </div>
    </div>


</main>





</>
  )
}

export default Product