import { useState } from "react";

export default function Form() {
  let [firstName, setFirstName] = useState("Hardik");
  let [lastName, setLastName] = useState("Srivastava");

  let handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  let handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  console.log(firstName);

  return (
    <>

      <h1>React Forms - 1</h1>

      <form>

        <label htmlFor="firstname">First Name : </label>
        <input
          type="text"
          placeholder="enter full name"
          value={firstName}
          onChange={handleFirstNameChange}
          id="firstname"
        />

        <label htmlFor="lastname">Last Name : </label>
        <input
          type="text"
          placeholder="enter full name"
          value={lastName}
          onChange={handleLastNameChange}
          id="lastname"
        />

        <button>Submit</button>

      </form>
      
    </>
  );
}
