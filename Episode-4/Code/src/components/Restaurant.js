import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { useParams, Link } from "react-router-dom";

const Restaurant = () => {
    const [resInfo, setResInfo] = useState(null);

    const { city, restaurant } = useParams();
    const apiUrl = `https://www.zomato.com/webroutes/getPage?page_url=/${city}/${restaurant}`;

    useEffect(() => {
        fetchRestaurant();
    }, [city, restaurant]);

    const fetchRestaurant = async () => {
        try {
            const response = await fetch(apiUrl);
            const json = await response?.json();
            const {
                cuisine_string,
                name,
                rating,
                res_id,
                res_status_text,
                res_thumb,
                timing,
            } = json?.page_data?.sections?.SECTION_BASIC_INFO;
            const { address, phoneDetails, zipcode } =
                json?.page_data?.sections?.SECTION_RES_CONTACT;

            const resData = {
                name: name || "Not Available",
                resId: res_id || "Not Available",
                resImg: res_thumb || "Not Available",
                cuisine: cuisine_string || "Not Available",
                rating: rating.aggregate_rating || "Not Available",
                ratingText: rating.rating_subtitle || "Not Available",
                resTiming: timing.timing_desc || "Not Available",
                resOpenStatus: res_status_text || "Not Available",
                resPhoneNumber: phoneDetails.phoneStr || "Not Available",
                resAddress: address || "Not Available",
                resZipCode: zipcode || "Not Available",
            };

            console.log(resData);

            setResInfo(resData);
        } catch (error) {
            console.log("Failed to fetch restaurant data:", error);
        }
    };

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="container my-5">
            <div className="card shadow-sm border rounded-4 overflow-hidden">
                <img
                    src={resInfo.resImg}
                    alt={resInfo.name}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h2 className="fw-bold mb-3">{resInfo.name}</h2>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-geo-alt-fill text-danger me-2 fs-5"></i>
                        <strong>Address:</strong> {resInfo.resAddress}, {resInfo.resZipCode}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-telephone-fill text-primary me-2 fs-5"></i>
                        <strong>Contact:</strong> {resInfo.resPhoneNumber}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-clock-fill text-info me-2 fs-5"></i>
                        <strong>Timing:</strong> {resInfo.resTiming}
                    </p>

                    <p className="mb-2 text-muted">
                        <i className="bi bi-bookmark-star-fill text-success me-2 fs-5"></i>
                        <strong>Cuisine:</strong> {resInfo.cuisine}
                    </p>

                    <p className="mb-3">
                        <i className="bi bi-star-fill text-warning me-2 fs-5"></i>
                        <strong>Rating:</strong> {resInfo.rating} ({resInfo.ratingText})
                    </p>

                    <span
                        className={`badge fs-6 px-3 py-2 rounded-pill ${resInfo.resOpenStatus.toLowerCase().includes("open")
                            ? "bg-success"
                            : "bg-danger"
                            }`}
                    >
                        {resInfo.resOpenStatus}
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
