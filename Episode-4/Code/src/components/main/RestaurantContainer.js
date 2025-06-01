
import RestaurantCard from "./RestaurantCard.js";

const RestaurantContainer = ({resto}) => (
    <div id="restaurant-container">
        {resto.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantsData={restaurant} />
        ))}
    </div>
);

export default RestaurantContainer;