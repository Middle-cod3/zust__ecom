import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../ZUST_logo_new.png'


function Header() {
  return (
 <>

{/* Top Header */}
        <header id="header" className="u-header u-header-left-aligned-nav">
            <div className="u-header__section">

                <div className="u-header-topbar py-2 d-none d-xl-block">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="topbar-left">
                                <a href="#" className="text-gray-110 font-size-13 u-header-topbar__nav-link">Welcome to ZUST Electronics Store</a>
                            </div>
                            <div className="topbar-right ml-auto">
                                <ul className="list-inline mb-0">
                                 
                                    <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                                        <Link to="/about" className="u-header-topbar__nav-link"><i class='ec ec-newsletter mr-1' ></i>About Us</Link>
                                    </li>
                                    <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                                        <Link to="/contact" className="u-header-topbar__nav-link"><i className="ec ec-smartphones mr-1"></i> Contact Us</Link>
                                    </li>
                                    <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                                        <a href="/services" className="u-header-topbar__nav-link"><i className="ec ec-thing-arrow-right mr-1"></i> Services</a>
                                    </li>
                                    
                                    <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">

                                        <Link id="sidebarNavToggler" to="/myaccount" role="button" className="u-header-topbar__nav-link"
                                         >
                                            <i className="ec ec-user mr-1"></i> Register <span className="text-gray-50">or</span> Sign in
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 

{/* Navbar  */}
<div className="main-header__section sticky-top bg-white">
        <div className="container">
            <nav className="navbar navbar-expand navbar-light bg-white justify-content-between">
                <div className="mobile-menu d-block d-lg-none">
                    <button type="button" className="btn-open first">
                        <i  className="bi bi-list" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                    </button>

                </div>


                <div className="logo">

                    <a className="navbar-brand" href=""><img src={LOGO} alt="Zust" height={50} className="img-fluid" /></a>

                </div>

            

                <div className="search-category-container d-none d-lg-block align-self-center">
                    <form className="min-width-600" id="search-form">
                        <div className="input-group search-bar-category">
                            <div className="dropdown category-btn">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">Menu</a>

                                <ul className="dropdown-menu mega-menu">

                                    <li className="has-megasubmenu">
                                        <Link className="dropdown-item" to="/product">Air Conditioner</Link>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                    <li className="">
                                                                        <a href="">200px x 700px</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <img className="img" height="200px" width="700px"
                                                        src="/static/images/banner/air.jpg" alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="/templates/product.html">Small Appliances</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="/templates/product.html">Air Purifier</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="/templates/product.html">Fan</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">Refrigerator</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">Kitchen Appliances</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">Home Appliances</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">LED TV</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="has-megasubmenu">
                                        <a className="dropdown-item" href="#">Mobile</a>
                                        <div className="megasubmenu dropdown-menu">
                                            <div className="row h-25">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Split</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className=""><a href="">Inverter</a></li>
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="product-menu-list">
                                                                <a href="#">
                                                                    <h6 className="title">Window</h6>
                                                                </a>
                                                                <ul className="list-unstyled">
                                                                    <li className="">
                                                                        <a href="">Non Inverter</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="img-fluid" src="/static/images/logo/logo_f_dsk.png"
                                                        alt="Air Conditioner" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className="easy-autocomplete eac-plate-dark">
                                <input aria-describedby="search-btn" aria-label="Search for products, brands &amp; more"
                                    className="search-input" id="searchproduct-item"
                                    placeholder="Search for products, brands &amp; more" required="" type="search"
                                    autoComplete="off" />
                                <div className="easy-autocomplete-container" id="eac-container-searchproduct-item">
                                    <ul></ul>
                                </div>
                            </div>
                     
                            <button className="btn" type="button" id="search-btn">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="others-menu align-self-center">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item d-inline d-lg-none">
                            <Link className="nav-link" data-bs-toggle="modal" to="/cart" role="button"><i
                                    className="bi bi-cart3"></i></Link>
                        </li>
                        <li className="nav-item d-inline d-lg-none">
                            <a className="nav-link" data-bs-toggle="modal" href="tel:987654321" role="button"><i
                                    className="bi bi-headphones"></i></a>
                        </li>


                        <li className="nav-item d-none d-lg-inline">
                            <Link className="nav-link" to="/cart"><i className="bi bi-cart3"></i>
                                <span className="d-none d-lg-inline">My Cart</span>
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-inline">
                            <a className="nav-link" href="tel:987654321"><i className="bi bi-headphones"></i>
                                <span className="d-none d-lg-inline">Call Now</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    </div>

{/* Medium & Small Device Search  */}
<div className="d-lg-none align-self-center mx-auto p-2">
        <form className="min-width-200" id="search-form">
            <div className="input-group search-bar-category">
                <div className="dropdown">
                    <a className="nav-link " href="#" data-bs-toggle="dropdown" aria-expanded="false"></a>
                </div>


                <div className="easy-autocomplete eac-plate-dark" >
                    <input aria-describedby="search-btn" aria-label="Search for products, brands &amp; more"
                        className="search-input" id="searchproduct-item"
                        placeholder="Search for products, brands &amp; more" required="" type="search"
                        autoComplete="off" />
                    <div className="easy-autocomplete-container" id="eac-container-searchproduct-item">
                        <ul></ul>
                    </div>
                </div>
                <button className="btn" type="button" id="search-btn">
                    <i className="bi bi-search"></i>
                </button>
            </div>

        </form>

    </div>

{/* Offcanvas for medium and small device */}
<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <img height="50" src="/static/images/logo/logo_f_dsk.png" alt="logo" className="mx-auto" />
            <nav className="animated bounceInDown offcanvas__nav">
                <ul>
                    <li className="sub-menu">
                        <a href="#settings">All Categories
                            <div className="fa fa-caret-down right"></div>
                        </a>

                        <ul>
                            <li className="sub-menu">
                                <a href="#settings">Air Purifier
                                    <div className="fa fa-caret-down right"></div>
                                </a>
                                <ul>
                                    <li className="">
                                        <a href="#">Inverter</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li className="sub-menu">
                                <a href="#settings">Air Conditioner
                                    <div className="fa fa-caret-down right"></div>
                                </a>
                                <ul>
                                    <li className="">
                                        <a href="#">Inverter</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#profile">Home</a></li>
                    <li><a href="#message">Services</a></li>
                    <li><a href="#message">Contact Us</a></li>
                    <li><a href="#message">My Account</a></li>
                    <li><a href="#message">About Us</a></li>

                    <li className="sub-menu">
                        <a href="#message">Help
                            <div className="fa fa-caret-down right"></div>
                        </a>
                        <ul>
                            <li><a href="#settings">FAQ's</a></li>
                            <li><a href="#settings">Submit a Ticket</a></li>
                            <li><a href="#settings">Network Status</a></li>
                        </ul>
                    </li>
                    <li><a href="#message">Logout</a></li>
                </ul>
            </nav>
        </div>
    </div>





 
 
 
 
 
 </>
  )
}

export default Header