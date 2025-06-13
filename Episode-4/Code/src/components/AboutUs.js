const AboutUs = () => {
  return (
    <div className="container py-5 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-danger mb-4">About Us</h1>
      <p className="lead text-muted" style={{ maxWidth: "600px" }}>
        Welcome to <span className="text-danger fw-bold">FoodieFinds</span> — your go-to platform to explore top-rated restaurants, trending cuisines, and hidden food gems powered by the Zomato API.
      </p>
      <p className="text-secondary" style={{ maxWidth: "600px" }}>
        Whether you're craving street food, fine dining, or late-night munchies, we help you discover places you'll love. We believe food isn't just a necessity — it's an experience. Join us on this delicious journey!
      </p>
    </div>
  );
};

export default AboutUs;
