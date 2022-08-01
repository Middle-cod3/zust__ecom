import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/300X300/img1.jpg';

function Cart() {
  return (
<>

<main id="main__content">

         <div className="bg-gray-13 bg-md-transparent">
            <div className="container">

                <div className="my-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Cart</a></li>

                        </ol>
                    </nav>
                </div>

            </div>
        </div>


        <div className="container">
            <div className="mb-4">
                <h1 className="text-center">My Cart</h1>
            </div>
            <div className="mb-10 cart-table">
                <form className="mb-4" action="#" method="post">
                    <table className="table" cellspacing="0">
                        <thead>
                            <tr>
                                <th className="product-remove">&nbsp;</th>
                                <th className="product-thumbnail">&nbsp;</th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity w-lg-15">Quantity</th>
                                <th className="product-subtotal">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="text-center">
                                    <a href="#" className="text-gray-32 font-size-26">×</a>
                                </td>
                                <td className="d-none d-md-table-cell">
                                    <a href="#"><img className="img-fluid max-width-100 p-1 border border-color-1" src={img1} alt="Image Description" /></a>
                                </td>

                                <td data-title="Product">
                                    <a href="#" className="text-gray-90">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                </td>

                                <td data-title="Price">
                                    <span className="">$1,100.00</span>
                                </td>

                                <td data-title="Quantity">
                                    <span className="sr-only">Quantity</span>

                                    <div className=" py-1 width-122 w-xl-80 px-3 border-color-1">
                                        <div className=" row align-items-center">
                                            <div className="col">
                                                <input className="form-control"  min="1" max="100" value="3" type="number" />
                                            </div>
                                          
                                        </div>
                                    </div>

                                </td>

                                <td data-title="Total">
                                    <span className="">$1,100.00</span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="text-center">
                                    <a href="#" className="text-gray-32 font-size-26">×</a>
                                </td>
                                <td className="d-none d-md-table-cell">
                                    <a href="#"><img className="img-fluid max-width-100 p-1 border border-color-1" src={img1} alt="Image Description" /></a>
                                </td>

                                <td data-title="Product">
                                    <a href="#" className="text-gray-90">Widescreen NX Mini F1 SMART NX</a>
                                </td>

                                <td data-title="Price">
                                    <span className="">$685.00</span>
                                </td>

                                <td data-title="Quantity">
                                    <span className="sr-only">Quantity</span>

                                    <div className=" py-1 width-122 w-xl-80 px-3 border-color-1">
                                        <div className=" row align-items-center">
                                            <div className="col">
                                                <input className="form-control"  min="1" max="100" value="3" type="number" />
                                            </div>
                                          
                                        </div>
                                    </div>

                                </td>

                                <td data-title="Total">
                                    <span className="">$685.00</span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6" className="border-top justify-content-center">
                                    <div className="pt-md-3">
                                        <div className="d-block d-md-flex float-right">
                                      
                                            <div className="d-md-flex">
                                                <Link to="/checkout" className="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-none d-md-inline-block">Proceed to checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div className="mb-8 cart-total">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7 col-md-8 offset-md-4">
                        <div className="border-bottom border-color-1 mb-3">
                            <h3 className="d-inline-block section-title mb-0 pb-2 font-size-26">Cart totals</h3>
                        </div>
                        <table className="table mb-3 mb-md-0">
                            <tbody>
                                <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal"><span className="amount">$1,785.00</span></td>
                                </tr>
                                <tr className="shipping">
                                    <th>Shipping Charges</th>
                                    <td data-title="Shipping">
                                        Flat Rate: <span className="amount">$300.00</span>
                                        <div className="mt-1">
                                            
                                            <div className="collapse mb-3" id="collapseExample">
                                                <div className="form-group mb-4">
                                                    <select className="js-select selectpicker dropdown-select right-dropdown-0-all w-100"
                                                        data-style="bg-white font-weight-normal border border-color-1 text-gray-20">
                                                        <option value="">Select a country…</option>
                                                        <option value="AX">Åland Islands</option>
                                                     
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                                <div className="form-group mb-4">
                                                    <select className="js-select selectpicker dropdown-select right-dropdown-0-all w-100"
                                                        data-style="bg-white font-weight-normal border border-color-1 text-gray-20">
                                                        <option value="">Select an option…</option>

                                                        <option value="LD">Lakshadeep</option>
                                                        <option value="PY">Pondicherry (Puducherry)</option>
                                                    </select>
                                                </div>
                                                <input className="form-control mb-4" type="text" placeholder="Postcode / ZIP" />
                                                <button type="button" className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">Update Totals</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total"><strong><span className="amount">$2,085.00</span></strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-md-none"><Link to="/checkout">Proceed to checkout</Link></button>
                    </div>
                </div>
            </div>
        </div>
















    </main>







</>
  )
}

export default Cart