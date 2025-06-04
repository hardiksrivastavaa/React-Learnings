
export const LOGO_URL = "https://i.pinimg.com/originals/2d/89/f2/2d89f2feab9d28416f0f8eec1faff6d1.jpg";

export const CARD_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


// const fetchRestaurantsData = async () => {
//     const response = await fetch(
//         "https://www.swiggy.com/mapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&collection=83659&tags=layout_CCS_Coffee&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
//     );

//     const json = await response.json();
//     const cards = json?.data?.cards;
//     const fetchedRestaurants = [];

//     for (let i = 0; i <= 9; i++) {
//         const info = cards?.[i]?.card?.card?.info;
//         if (info) {
//             fetchedRestaurants.push({
//                 name: info.name,
//                 cuisines: info.cuisines,
//                 locality: info.locality,
//                 avgRating: info.avgRating,
//                 costForTwo: info.costForTwo,
//                 time: info?.sla?.slaString,
//                 img: info.cloudinaryImageId,
//             });
//         }
//     }

//     setRestaurants(fetchedRestaurants);
// };


