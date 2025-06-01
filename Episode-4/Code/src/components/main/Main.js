// Main Component ⤵

import RestaurantContainer from "./RestaurantContainer";
import restaurants from "../../../utils/restaurantData.js";
import { useState } from "react";

const Main = () => {
    let [rest, setRes] = useState(restaurants);
    let [isClick, setIsClick] = useState(false);

    const resChange = () => {
        if (isClick) {
            // If already filtered, reset to full list
            setRes(restaurants);
        } else {
            // Apply filter for top-rated restaurants
            const filteredList = restaurants.filter(
                (rest) => rest.rating > 4
            );
            setRes(filteredList);
        }
        
        // Toggle the button state
        setIsClick(!isClick);
    };

    console.log(rest);

    return (
        <main>
            <div id="main">
                <div id="search">
                    <button onClick={resChange}>
                        Click Here to get Top Rated Restaurant
                    </button>
                </div>
                <RestaurantContainer resto={rest} />
            </div>
        </main>
    );
};

export default Main;
