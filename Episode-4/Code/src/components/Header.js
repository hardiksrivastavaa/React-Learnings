
// Header Components ⤵

import { useState } from "react";
import { LOGO_URL } from "../../utils/contstants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const changeBtn = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={LOGO_URL} alt="Bootstrap" width="120" height="64" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ms-lg-auto">
                            <ul className="navbar-nav mb-2 mb-lg-0 fs-5 px-2">
                                <li className="nav-item mx-2 hover-border-bottom">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                        onClick={changeBtn}
                                    >
                                        {btnName}
                                    </a>
                                </li>
                                <li className="nav-item mx-2 hover-border-bottom">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mx-2 hover-border-bottom">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Order
                                    </a>
                                </li>
                                <li className="nav-item mx-2 hover-border-bottom">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Restaurant
                                    </a>
                                </li>
                                <li className="nav-item mx-2 hover-border-bottom">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Dosa
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
