import "bootstrap-icons/font/bootstrap-icons.css";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurant.js";

const Restaurant = () => {
    const restaurant = useRestaurant();

    if (restaurant === null) {
        return <Shimmer />;
    }

    const {
        resImg,
        name,
        resAddress,
        resOpenStatus,
        resPhoneNumber,
        resTiming,
        resZipCode,
        rating,
        ratingText,
        cuisine,
    } = restaurant;

    return (
        <div className="container my-5">
            <div className="card shadow-sm border rounded-4 overflow-hidden">
                <img
                    src={resImg}
                    alt={name}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h2 className="fw-bold mb-3">{name}</h2>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-geo-alt-fill text-danger me-2 fs-5"></i>
                        <strong>Address:</strong> {resAddress}, {resZipCode}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-telephone-fill text-primary me-2 fs-5"></i>
                        <strong>Contact:</strong> {resPhoneNumber}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-clock-fill text-info me-2 fs-5"></i>
                        <strong>Timing:</strong> {resTiming}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-bookmark-star-fill text-success me-2 fs-5"></i>
                        <strong>Cuisine:</strong> {cuisine}
                    </p>

                    <p className="mb-3">
                        <i className="bi bi-star-fill text-warning me-2 fs-5"></i>
                        <strong>Rating:</strong> {rating} ({ratingText})
                    </p>

                    <span
                        className={`badge fs-6 px-3 py-2 rounded-pill ${resOpenStatus.toLowerCase().includes("open")
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                    >
                        {resOpenStatus}
                    </span>
                </div>
            </div>

            <div className="text-center mt-4">
                <Link to="/">
                    <button className="btn btn-outline-danger px-4 py-2 rounded-pill">
                        <i className="bi bi-arrow-left-circle me-2"></i>Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Restaurant;
