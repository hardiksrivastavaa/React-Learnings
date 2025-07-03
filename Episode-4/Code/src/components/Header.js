// import { LOGO_URL } from "../../utils/contstants";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="border-bottom shadow-sm">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        {/* <img
                            src={LOGO_URL}
                            alt="Logo"
                            className="img-fluid"
                            style={{ maxHeight: "50px", objectFit: "contain" }}
                        /> */}
                        <p className="text-danger my-auto fs-1 fw-semibold mx-3">FoodieFinds</p>

                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/order">Order</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/">Restaurant</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
