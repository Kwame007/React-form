import React, { useState } from "react";

function Form(props) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredFirstName: "",
  //   enteredphone: "",
  //   enteredAge: "",
  // });

  const fullNameChangeHandler = function (event) {
    setFullName(event.target.value);
  };
  const phoneChangeHandler = function (event) {
    setPhone(event.target.value);
  };
  const locationChangeHandler = function (event) {
    setLocation(event.target.value);
  };

  // form submit
  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      fullName,
      phone,
      location,
    };
    props.onFormSubmit(user);

    setFullName("");
    setPhone("");
    setLocation("");
  };
  return (
    <div>
      <h1>{"User Details"}</h1>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="firstName">Full Name</label>
          <br />
          <input
            value={fullName}
            type="text"
            onChange={fullNameChangeHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Phone</label>
          <br />
          <input value={phone} type="number" onChange={phoneChangeHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="age">Location</label>
          <br />
          <input
            value={location}
            type="text"
            onChange={locationChangeHandler}
          />
        </div>
        <br />
        <button>Click me</button>
      </form>
      <hr />
    </div>
  );
}
export default Form;
