
// RestaurantCard Component ⤵

import { CARD_URL } from "../../../utils/contstants";

const RestaurantCard = (props) => {
    const { restaurantsData } = props;
    const { name, cuisine, location, rating, details } = restaurantsData;

    return (
        <div id="restaurant-card">
            <img
                src={CARD_URL}
                alt="Restaurant"
                className="restaurant-image"
            />
            <div className="restaurant-info">
                <h2 className="restaurant-name">{name}</h2>
                <p className="restaurant-cuisine">🍽️ {cuisine}</p>
                <p className="restaurant-location">📍 {location}</p>
                <div className="restaurant-meta">
                    <span className="restaurant-rating">⭐ {rating}</span>
                    <span className="restaurant-details">{details}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;