import ReactDOM from "react-dom/client";
import restaurants from "./restaurants";

/* 
1. Header
- Logo
- NavItems

2. Body
- Search 
- Restaurant Container
----Restaurant Card

3. Footer
- Copyright
- links
- address
- Contact

*/

// AppLayout

const AppLayout = () => (
    <>
        <Header />
        <Main />
        <Footer />
    </>
);

// Header Components ⤵

const Header = () => (
    <header>
        <div id="header">
            <Logo />
            <Navbar />
        </div>
    </header>
);

const Logo = () => (
    <div id="logo-container">
        <img
            className="logo"
            src="https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?semt=ais_items_boosted&w=740"
            alt="logo"
        />
    </div>
);

const Navbar = () => (
    <nav>
        <div id="navbar">
            <ul>
                <li>Home</li>
                <li>Collge</li>
                <li>Home</li>
                <li>School</li>
            </ul>
        </div>
    </nav>
);

// Main Components ⤵

const Main = () => (
    <main>
        <div id="main">
            <div id="search">Search</div>
            <RestaurantContainer />
        </div>
    </main>
);

const RestaurantContainer = () => (
    <div id="restaurant-container">
        {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantsData={restaurant} />
        ))}
    </div>
);

const RestaurantCard = (props) => {
    const { restaurantsData } = props;
    const { name, cuisine, location, rating, details } = restaurantsData;

    return (
        <div id="restaurant-card">
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/11/c5476d2f-b09f-4c53-80b5-60cbdaf60a3b_80ff5967-9cf2-44fc-89a6-9c9350b1d736.jpg"
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

// Footer Components ⤵

const Footer = () => (
    <footer>
        <div id="footer">
            <h3> &copy; Developed by Hardik Srivastava - 2025</h3>
        </div>
    </footer>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
