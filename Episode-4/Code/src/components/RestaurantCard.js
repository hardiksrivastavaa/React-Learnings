
// Restaurant Card Component ⤵

const RestaurantCard = (props) => {
    const { restaurantsData } = props;
    const { name, locality, avgRating, img } =
        restaurantsData;
        
    return (
        <div id="restaurant-card" className="card shadow-sm mb-4 rounded-4">
            <img
                src={img}
                alt="Restaurant"
                className="card-img-top p-1 rounded-bottom rounded-4 img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body restaurant-info">
                <h2 className="mb-4 card-title fs-4 restaurant-name">{name}</h2>
                {/* <p className="mb-1 card-text restaurant-cuisine">{cuisines.join(", ")}</p> */}
                <p className="mb-1 card-text restaurant-location">{locality}</p>
                <p className="mb-1 card-text restaurant-rating">⭐ {avgRating}</p>
                {/* <p className="mb-1 card-text restaurant-details">{time} • {costForTwo}</p> */}
            </div>
        </div>
    );
};

export default RestaurantCard;
