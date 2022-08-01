import React from 'react'

function Myaccount() {
  return (
<>
<main id="main__content">

         <div className="bg-gray-13 bg-md-transparent">
            <div className="container">

                <div className="my-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">Home</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="">My Account</a></li>
                        </ol>
                    </nav>
                </div>

            </div>
        </div>


        <div className="container u-sidebar__body">
            <div className="row">

                <div className="col-xl-6 b_r_grey">
                    <div className="u-sidebar__content u-header-sidebar__content">
                        <form action="">
                            <div id="login" data-target-group="idForm">

                                <header className="text-center mb-7">
                                <h2 className="h4 mb-0">Welcome Back!</h2>
                                <p>Login to manage your account.</p>
                                </header>



                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signinEmail">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signinEmailLabel">
                                                    <span className="fas fa-user"></span>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmailLabel" required />
                                        </div>
                                    </div>
                                </div>



                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                      <label className="sr-only" htmlFor="signinPassword">Password</label>
                                      <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="signinPasswordLabel">
                                                <span className="fas fa-lock"></span>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPasswordLabel" required
                                           data-msg="Your password is invalid. Please try again."
                                           data-error-class="u-has-error"
                                           data-success-class="u-has-success" />
                                      </div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-end mb-4">
                                    <a className="js-animation-link small link-muted" href="/templates/forget__password.html"
                                    >Forgot Password?</a>
                                </div>

                                <div className="mb-2">
                                    <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
                                </div>

                              

              
                            </div>







                        </form>



                </div>

                    
                </div>

                <div className="col-xl-6">
                    <div className="u-sidebar__content u-header-sidebar__content">
                        <form action="">
                            <div id="signup" data-target-group="idForm">

                                <header className="text-center mb-7">
                                <h2 className="h4 mb-0">Welcome to ZUST.</h2>
                                <p>Fill out the form to get started.</p>
                                </header>



                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signupName">Your Full Name</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signupNameLabel">
                                                    <span className="fas fa-user"></span>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" name="email" id="signupName" placeholder="Full Name" aria-label="Email" aria-describedby="signupNameLabel" required
                                         />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signupEmail">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signupEmailLabel">
                                                    <span className="fas fa-envelope"></span>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" name="email" id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required
                                         />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signupPhone">Phone</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signupPhoneLabel">
                                                    <span className="fas fa-mobile"></span>
                                                </span>
                                            </div>
                                            <input type="tel" className="form-control" name="email" id="signupEmail" placeholder="Phone No" aria-label="Email" aria-describedby="signupPhoneLabel" required
                                         />
                                        </div>
                                    </div>
                                </div>



                                <div className="form-group">
                                    <div className="js-form-message js-focus-state">
                                        <label className="sr-only" htmlFor="signupPassword">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="signupPasswordLabel">
                                                    <span className="fas fa-lock"></span>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" name="password" id="signupPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel" required
                                         />
                                        </div>
                                    </div>
                                </div>


                              

                                <div className="mb-2">
                                    <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                                </div>

  
                            </div>



                        </form>
                        </div>


                </div>
            </div>
        </div>





</main>




</>

  )
}

export default Myaccount