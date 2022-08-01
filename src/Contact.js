import React from 'react'

function Contact() {
  return (
<>

<main id="main__content">

         <div className="bg-gray-13 bg-md-transparent">
            <div className="container">

                <div className="my-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">Home</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">Contact Us</a></li>
                        </ol>
                    </nav>
                </div>

            </div>
        </div>




        <div className="container">
                <div className="mb-5">
                    <h1 className="text-center">Contact</h1>
                </div>
                <div className="row mb-10">
                    <div className="col-lg-7 col-xl-6 mb-8 mb-lg-0">
                        <div className="mr-xl-6">
                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title mb-0 pb-2 font-size-25">Leave us a Message</h3>
                            </div>
                            <p className="max-width-830-xl text-gray-90">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur luctus interdum eleifend. Ut tempor lorem a turpis fermentum.</p>
                            <form className="js-validate" novalidate="novalidate">
                                <div className="row">
                                    <div className="col-md-6">

                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                First name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off" />
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Last name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success" />
                                        </div>

                                    </div>

                                    <div className="col-md-12">

                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Subject
                                            </label>
                                            <input type="text" className="form-control" name="Subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-class="u-has-error" data-success-class="u-has-success" />
                                        </div>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Your Message
                                            </label>

                                            <div className="input-group">
                                                <textarea className="form-control p-5" rows="4" name="text" placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary-dark-w px-5">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-6">
                        <div className="mb-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758264.4031516331!2d2.30981039376288!3d42.06525545034693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12baf8e36f90d6c5%3A0xbee52c2ae6bcadca!2sCosta%20Brava%2C%20Girona%2C%20Spain!5e0!3m2!1sen!2sin!4v1656994040264!5m2!1sen!2sin" width="100%" height="288" frameborder="0"  allowfullscreen=""></iframe>
                        </div>
                        <div className="border-bottom border-color-1 mb-5">
                            <h3 className="section-title mb-0 pb-2 font-size-25">Our Address</h3>
                        </div>
                        <address className="mb-6 text-lh-23">
                            11 King Street,
                            Sea Side VIC 3000,
                            Costa Bravia
                            <div className="">Support(+800)856 800 604</div>
                            <div className="">Email: <a className="text-blue text-decoration-on" href="mailto:contact@zust.com">info@zust.com</a></div>
                        </address>
                        <h5 className="font-size-14 font-weight-bold mb-3">Opening Hours</h5>
                        <div className="">Monday to Friday: 9am-9pm</div>
                        <div className="mb-6">Saturday to Sunday: 9am-11pm</div>
                        <h5 className="font-size-14 font-weight-bold mb-3">Careers</h5>
                        <p className="text-gray-90">If you’re interested in employment opportunities at Electro, please email us: <a className="text-blue text-decoration-on" href="mailto:contact@yourstore.com">contact@zust.com</a></p>
                    </div>
                </div>
               
            </div>






</main>




</>
  )
}

export default Contact