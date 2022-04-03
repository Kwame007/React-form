import React from "react";
import Form from "./Form";

function NewUser(props) {
  console.log(props);
  const onSubmitHandler = function (data) {
    // console.log(data);
    const dataCopy = { ...data };
    props.onFormSubmit(dataCopy);
  };
  return (
    <div>
      <Form onFormSubmit={onSubmitHandler} />
    </div>
  );
}
export default NewUser;
