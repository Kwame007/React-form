import React from "react";
import Card from "../Card";
import NewUser from "./NewUser";
import UserInfo from "./UserInfo";

function User(props) {
  console.log(props);

  const formSubmit = function (data) {
    const newData = { ...data, id: Math.random() };
    console.log(newData);
    props.onSubmit(newData);
  };
  return (
    <div>
      <Card>
        <NewUser onFormSubmit={formSubmit} />
        {props.user.map((expense) => (
          <UserInfo
            key={expense.id}
            fullname={expense.fullName}
            phone={expense.phone}
            location={expense.location}
          />
        ))}
        {/* <UserInfo user={props.user} /> */}
      </Card>
    </div>
  );
}
export default User;
