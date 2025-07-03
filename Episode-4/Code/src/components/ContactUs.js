import React from "react";
import Dev from "./Dev";

const ContactUs = () => {
  return (
    <div className="container py-5 d-flex flex-column align-items-center text-center">
      <h1 className="text-danger mb-4">Contact Us</h1>
      <p className="lead text-muted" style={{ maxWidth: "600px" }}>
        Have questions, feedback, or just want to say hi? We're here to help you
        discover the best places to eat!
      </p>
      <div className="mt-4">
        <p className="mb-1">
          <strong>Email:</strong> support@foodiefinds.com
        </p>
        <p className="mb-1">
          <strong>Phone:</strong> +91-9876543210
        </p>
        <p>
          <strong>Location:</strong> Raebareli, India
        </p>
      </div>
      <a
        href="mailto:hardikfgp@gmail.com"
        className="btn btn-outline-danger mt-3"
      >
        Drop us an Email
      </a>

      <Dev />
    </div>
  );
};

export default ContactUs;
