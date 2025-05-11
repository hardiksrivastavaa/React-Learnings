import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleFormSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          placeholder="Enter Username"
          onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="remarks">Remarks :</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          placeholder="Enter Review"
          onChange={handleInputChange}
        ></textarea>

        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          max={5}
          min={1}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}
