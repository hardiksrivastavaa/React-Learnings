
// Main Component ⤵

import restaurantsData from "../../utils/restaurantData.js";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { useEffect, useState } from "react";

const Main = () => {
    let [restaurants, setRestaurants] = useState([]);
    let [city, setCity] = useState("lucknow");
    let [inputRestaurant, setInputRestaurant] = useState("");
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const topRatedRestaurants = () => {
        const topRated = restaurants.filter(
            (restaurant) => restaurant.avgRating > 4
        );
        setFilteredRestaurants(topRated);
    };

    useEffect(() => {
        fetchRestaurantsData();
    }, []);

    const fetchRestaurantsData = async () => {
        try {
            const response = await fetch(
                `https://www.zomato.com/webroutes/getPage?page_url=/${city}/trending-this-week&location=&isMobile=0`
            );

            const json = await response?.json();
            const cards = json?.page_data?.sections?.SECTION_ENTITIES_DATA;
            // Optional Chaning
            const maxLen = Math.max(cards?.length, restaurantsData.length);
            const fetchedRestaurants = [];

            for (let i = 0; i < maxLen; i++) {
                const info = cards?.[i];
                const mockData = restaurantsData?.[i];
                fetchedRestaurants.push({
                    name: info?.name || mockData?.name,
                    locality: info?.subtitleData?.locality?.text || mockData?.locality,
                    avgRating: info?.rating?.aggregate_rating || mockData?.avgRating,
                    img: info?.imageUrl || `${CARD_URL}${mockData?.img}`,
                });
            }

            setRestaurants(fetchedRestaurants);
            setFilteredRestaurants(fetchedRestaurants);
            setCity("");
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };

    const handleCityClick = () => {
        console.log(city);
        fetchRestaurantsData();
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleRestaurantChange = (e) => {
        setInputRestaurant(e.target.value);
    };

    const handleRestaurantClick = () => {
        console.log(inputRestaurant);
        let res = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(inputRestaurant.toLowerCase())
        );
        setFilteredRestaurants(res);
    };

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <main>
            <div id="main">
                <div id="search" className="d-flex justify-center w-full">
                    <button
                        type="button"
                        className="btn btn-outline-success mx-auto"
                        onClick={topRatedRestaurants}
                    >
                        Top Rated Restaurant
                    </button>
                    <div className="d-flex mx-auto">
                        <input
                            className="form-control mx-2"
                            type="text"
                            placeholder="Search City"
                            aria-label="Search"
                            name="city"
                            onChange={handleCityChange}
                            value={city}
                        />
                        <button
                            className="btn btn-outline-success"
                            onClick={handleCityClick}
                        >
                            Search
                        </button>
                    </div>
                    <div className="d-flex mx-auto">
                        <input
                            className="form-control mx-2"
                            type="text"
                            placeholder="Search Restaurant"
                            aria-label="Search"
                            name="restaurant"
                            onChange={handleRestaurantChange}
                            value={inputRestaurant}
                        />
                        <button
                            className="btn btn-outline-success"
                            onClick={handleRestaurantClick}
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div id="restaurant-container" className="container my-4">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 d-flex items-center g-lg-4 ">
                        {filteredRestaurants.map((restaurant, index) => (
                            <div className="col" key={index}>
                                <RestaurantCard restaurantsData={restaurant} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
