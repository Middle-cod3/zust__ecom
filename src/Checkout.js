import React from 'react'

function Checkout() {
  return (
<>
<main id="main__content">

         <div className="bg-gray-13 bg-md-transparent">
            <div className="container">

                <div className="my-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">Home</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">Checkout</a></li>
                        </ol>
                    </nav>
                </div>

            </div>
        </div>


        <div className="container">
            <div className="mb-5">
                <h1 className="text-center">Checkout</h1>
            </div>
          

         

            <form className="js-validate" novalidate="novalidate">
                <div className="row">
                    <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                        <div className="pl-lg-3 ">
                            <div className="bg-gray-1 rounded-lg">

                                <div className="p-4 mb-4 checkout-table">

                                    <div className="border-bottom border-color-1 mb-5">
                                        <h3 className="section-title mb-0 pb-2 font-size-25">Your order</h3>
                                    </div>



                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart_item">
                                                <td>Ultra Wireless S50 Headphones S50 with Bluetooth&nbsp;<strong className="product-quantity">× 1</strong></td>
                                                <td>$1,100.00</td>
                                            </tr>
                                            <tr className="cart_item">
                                                <td>Widescreen NX Mini F1 SMART NX&nbsp;<strong className="product-quantity">× 1</strong></td>
                                                <td>$685.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Subtotal</th>
                                                <td>$1,785.00</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td>Flat rate $300.00</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td><strong>$2,085.00</strong></td>
                                            </tr>
                                        </tfoot>
                                    </table>

                              
                                    <button type="submit" className="btn btn-green btn-block btn-pill font-size-20 mb-3 py-3">SCAN AND PAY</button>
                                    <button type="submit" className="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">ONLINE</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 order-lg-1">
                        <div className="pb-7 mb-7">

                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title mb-0 pb-2 font-size-25">Billing details</h3>
                            </div>



                            <div className="row">
                                <div className="col-md-6">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            First name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" name="firstName" placeholder="Jack" aria-label="Jack" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off" />
                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Last name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" name="lastName" placeholder="Wayley" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>

                                <div className="w-100"></div>

                             

                      

                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                             address
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" name="streetAddress" placeholder="470 Lucy Forks" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>

                          

                           

                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Postcode/Zip
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" name="postcode" placeholder="99999" aria-label="99999" required="" data-msg="Please enter a postcode or zip code." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>

                                <div className="w-100"></div>

                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            State
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                            data-live-search="true"
                                            data-style="form-control border-color-1 font-weight-normal">

                                            <option value="west bengal">west bengal</option>
                                          
                                        </select>
                                    </div>

                                </div>
                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            District
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                            data-live-search="true"
                                            data-style="form-control border-color-1 font-weight-normal">
                                            <option value="">Select state</option>
                                            <option value="kolkata">kolkata</option>
                                            <option value="howrah">howrah</option>
                                            <option value="hooghly">hooghly</option>
                                            <option value="bardhaman">bardhaman</option>

                                        </select>
                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Email address
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="email" className="form-control" name="emailAddress" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Phone
                                        </label>
                                        <input type="text" className="form-control" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>

                                <div className="w-100"></div>
                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Company name (optional)
                                        </label>
                                        <input type="text" className="form-control" name="companyName" placeholder="Company Name" aria-label="Company Name" data-msg="Please enter a company name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>
                                <div className="col-md-12">

                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Company GSTIN (optional)
                                        </label>
                                        <input type="text" className="form-control" name="companyName" placeholder="Company GSTIN" aria-label="Company Name" data-msg="Please enter a company name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                    </div>

                                </div>
                            </div>


                        

                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title mb-0 pb-2 font-size-25">Shipping Details</h3>
                            </div>


                            <div id="shopCartAccordion3" className="accordion rounded mb-5">

                                <div className="card border-0">
                                    <div id="shopCartHeadingFour" className="custom-control custom-checkbox d-flex align-items-center">
                                        <input type="checkbox" className="custom-control-input" id="shippingdiffrentAddress" name="shippingdiffrentAddress" />
                                        <label className="custom-control-label form-label" for="shippingdiffrentAddress" data-bs-toggle="collapse" data-bs-target="#shopCartfour" aria-expanded="false" aria-controls="shopCartfour">
                                            Ship to a different address?
                                        </label>
                                    </div>
                                    <div id="shopCartfour" className="collapse mt-5" aria-labelledby="shopCartHeadingFour" data-parent="#shopCartAccordion3">

                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Shipping First name
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" name="firstName" placeholder="Jack" aria-label="Jack" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off" />
                                                </div>

                                            </div>

                                            <div className="col-md-6">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Shipping Last name
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" name="lastName" placeholder="Wayley" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>

                                            </div>

                                            <div className="w-100"></div>

                                       

                                        

                                            <div className="col-md-12">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Shipping address
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" name="streetAddress" placeholder="470 Lucy Forks" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>

                                            </div>

                                       

                                            <div className="col-md-12">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Postcode/Zip
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" name="postcode" placeholder="99999" aria-label="99999" required="" data-msg="Please enter a postcode or zip code." data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>

                                            </div>

                                            <div className="w-100"></div>

                                            <div className="col-md-12">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        State
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                                        data-live-search="true"
                                                        data-style="form-control border-color-1 font-weight-normal">
                                                        <option value="west bengal">west bengal</option>
                                                       
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-12">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        district
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                                        data-live-search="true"
                                                        data-style="form-control border-color-1 font-weight-normal">
                                                        <option value="kolkata">kolkata</option>
                                                        <option value="howrah">howrah</option>
                                                        <option value="hooghly">hooghly</option>
                                                        <option value="bardhaman">bardhaman</option>
                                                       
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-md-6">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Email address
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="email" className="form-control" name="emailAddress" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>

                                            </div>

                                            <div className="col-md-6">

                                                <div className="js-form-message mb-6">
                                                    <label className="form-label">
                                                        Phone
                                                    </label>
                                                    <input type="text" className="form-control" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>

                                            </div>

                                            <div className="w-100"></div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="js-form-message mb-6">
                                <label className="form-label">
                                    Order notes (optional)
                                </label>

                                <div className="input-group">
                                    <textarea className="form-control p-5" rows="4" name="text" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>












    </main>



</>
  )
}

export default Checkout