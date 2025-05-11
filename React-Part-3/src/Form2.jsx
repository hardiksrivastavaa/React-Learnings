import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  let handleInputChange = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
    });
  };

  return (
    <>
      <h1>React Forms - 2</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name : </label>
        <input
          name="firstName"
          type="text"
          placeholder="enter first name"
          value={formData.firstName}
          onChange={handleInputChange}
          id="firstname"
        />

        <br />
        <br />
        <label htmlFor="lastname">Last Name : </label>
        <input
          name="lastName"
          type="text"
          placeholder="enter last name"
          value={formData.lastName}
          onChange={handleInputChange}
          id="lastname"
        />

        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          name="password"
          type="password"
          placeholder="enter password name"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
