import React from "react";

const Footer = () => (
    <footer className="bg-dark text-light py-3 mt-auto">
        <div className="container text-center">
            <h6 className="mb-0">
                &copy; {new Date().getFullYear()} | Developed by{" "}
                <strong>Hardik Srivastava</strong>
            </h6>
        </div>
    </footer>
);

export default Footer;
