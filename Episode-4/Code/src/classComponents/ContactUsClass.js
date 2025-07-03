import { React, Component } from "react";
import DevClass from "./DevClass";

class ContactUsClass extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Contructor Called");
  }

  render() {
    console.log("Parent Render Method Called Called");

    return (
      <div className="container py-5 d-flex flex-column align-items-center text-center">
        <h1 className="text-danger mb-4">Contact Us</h1>
        <p className="lead text-muted" style={{ maxWidth: "600px" }}>
          Have questions, feedback, or just want to say hi? We're here to help
          you discover the best places to eat!
        </p>

        <br />
        <hr />
        <br />

        <DevClass name={"Hardik Srivastava"} />
      </div>
    );
  }
}

export default ContactUsClass;





