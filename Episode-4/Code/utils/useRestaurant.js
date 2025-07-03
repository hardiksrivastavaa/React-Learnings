import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurant = () => {
    const [resInfo, setResInfo] = useState(null);
    const { city, restaurant } = useParams();

    useEffect(() => {
        if (city && restaurant) {
            const apiUrl = `https://www.zomato.com/webroutes/getPage?page_url=/${city}/${restaurant}`;
            fetchRestaurant(apiUrl);
        }
    }, [city, restaurant]);

    const fetchRestaurant = async (apiUrl) => {
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
            setResInfo(resData);
        } catch (error) {
            console.log("Failed to fetch restaurant data:", error);
        }
    };

    return resInfo;
};

export default useRestaurant;
