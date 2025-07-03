import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const { status, statusText, message } = err || {};

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <div
                className="card shadow-lg border-danger"
                style={{ maxWidth: "500px" }}
            >
                <div className="card-header bg-danger text-white">
                    <h1 className="h3 m-0">Oops! Something went wrong</h1>
                </div>
                <div className="card-body">
                    <h2 className="text-secondary">
                        {status || 500} — {statusText || "Unexpected Error"}
                    </h2>
                    <p className="text-muted mt-3">
                        {message || "We couldn’t load the page you were looking for."}
                    </p>
                    <Link to="/" className="btn btn-outline-danger mt-3">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
