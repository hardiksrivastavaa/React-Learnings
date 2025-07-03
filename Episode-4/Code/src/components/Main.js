import useOnlineStatus from "../../utils/useOnlineStatus.js";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Main = () => {
  let [restaurants, setRestaurants] = useState([]);
  const { city } = useParams();
  const navigate = useNavigate();
  let [inputRestaurant, setInputRestaurant] = useState("");
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchCity, setSearchCity] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [istopRated, setIsTopRated] = useState(false);
  const [loading, setLoading] = useState(false);

  const topRatedRestaurants = () => {
    if (!istopRated) {
      const topRated = restaurants.filter(
        (restaurant) => restaurant.avgRating >= 4.5
      );
      setFilteredRestaurants(topRated);
    } else {
      setFilteredRestaurants(restaurants);
    }
    setIsTopRated(!istopRated);
  };

  useEffect(() => {
    if (city) {
      fetchRestaurants();
    }
  }, [city]);


  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const url = `https://www.zomato.com/webroutes/getPage?page_url=/${city
        .toLowerCase()
        .trim()}/trending-this-week&location=&isMobile=1`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const json = await response?.json();
      const cards = json?.page_data?.sections?.SECTION_ENTITIES_DATA;
      const fetchedRestaurants = [];

      if (!cards || !cards.length) {
        throw new Error("No restaurants found");
      }

      for (let i = 0; i < cards?.length; i++) {
        const info = cards?.[i];
        const pathname = new URL(info?.url).pathname;
        fetchedRestaurants.push({
          resPath: pathname,
          name: info?.name,
          locality: info?.subtitleData?.locality?.text,
          avgRating: info?.rating?.aggregate_rating,
          img: info?.imageUrl,
        });
      }

      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message || "Something went wrong");
      setRestaurants([]);
      setFilteredRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleCityClick = () => {
    if (!searchCity.trim()) {
      alert("Please enter a city before searching.");
      return;
    }

    setSearchCity("");
    navigate(`/restaurants/${searchCity.trim().toLowerCase()}`);
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
    setInputRestaurant("");
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center" role="alert">
          <h1 className="display-4 fw-bold mb-3">Oops!</h1>
          <p className="lead">Looks like you are <strong>offline</strong>!</p>
          <p className="mb-0">Check your internet connection and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="py-4">
      <div className="container">
        {/* 🔍 Search Section */}
        <div
          id="search"
          className="row justify-content-center align-items-center g-3 mb-4"
        >
          {/* Top Rated Button */}
          <div className="col-12 col-md-auto text-center">
            <button
              type="button"
              className="btn btn-outline-success w-100"
              onClick={topRatedRestaurants}
            >
              Top Rated Restaurants
            </button>
          </div>

          {/* City Search */}
          <div className="col-12 col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search City"
                onChange={handleCityChange}
                value={searchCity}
              />
              <button
                className="btn btn-outline-success"
                onClick={handleCityClick}
              >
                Search
              </button>
            </div>
          </div>

          {/* Restaurant Search */}
          <div className="col-12 col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Restaurant"
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
        </div>

        {/* Show shimmer if loading */}
        {loading ? (
          <Shimmer />
        ) : (
          <>
            {/* 🔴 Error Message */}
            {errorMsg && (
              <div
                className="alert alert-danger text-center fw-bold fs-5"
                role="alert"
              >
                ⚠️ {errorMsg}
              </div>
            )}

            {/* 🔁 Reset Button */}
            {!errorMsg && filteredRestaurants.length !== restaurants.length && (
              <div className="text-center mb-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setFilteredRestaurants(restaurants)}
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* 🙁 No Results Found */}
            {!errorMsg && filteredRestaurants.length === 0 && (
              <div
                className="alert alert-warning text-center fw-bold fs-5"
                role="alert"
              >
                🙁 No matching restaurants found.
              </div>
            )}

            {/* 🍴 Restaurant Grid */}
            <div
              id="restaurant-container"
              className="row g-4 align-items-stretch"
            >
              {filteredRestaurants.map((restaurant, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
                  key={index}
                >
                  <RestaurantCard restaurantsData={restaurant} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
