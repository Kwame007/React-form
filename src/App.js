import React, { useState } from "react";
import User from "./Component/User";

const user = [
  {
    fullName: "Will Smith",
    phone: "+23355434323",
    location: "Spintex",
    id: Math.random(),
  },
];

function App() {
  const [newUser, setNewUser] = useState(user);
  const onSubmitHandler = (data) => {
    setNewUser((prevState) => {
      return [data, ...prevState];
    });
    console.log(newUser);
  };
  return (
    <div className="App">
      <User user={newUser} onSubmit={onSubmitHandler} />
    </div>
  );
}

export default App;
