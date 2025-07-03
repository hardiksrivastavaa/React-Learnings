import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const { restaurantsData } = props;
    const { resPath, name, locality, avgRating, img } = restaurantsData;

    function capitalizeEachWord(sentence) {
        return sentence
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    }

    return (
        <div
            id="restaurant-card"
            className="card shadow-sm rounded-4 overflow-hidden w-100 h-100 d-flex flex-column"
        >
            <img
                src={img}
                alt={capitalizeEachWord(name)}
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                <div>
                    <h5 className="card-title fw-bold text-dark">
                        {capitalizeEachWord(name)}
                    </h5>
                    <p className="card-text text-muted mb-1">
                        <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                        {locality}
                    </p>
                </div>
                <p className="card-text text-muted mt-auto mb-0">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    {avgRating ? avgRating : "N/A"} / 5
                </p>

                <p className="mx-0 my-0">
                    <Link
                        className="btn btn-outline-primary mt-3"
                        to={`/restaurants${resPath}`}
                    >
                        View more
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RestaurantCard;
