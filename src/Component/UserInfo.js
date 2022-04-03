import React from "react";

function UserInfo(props) {
  console.log(props);
  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ccc",
          padding: ".1rem",
          borderRadius: "5px",
          marginTop: ".2rem",
        }}
      >
        <p>{props.fullname}</p>
        <p>{props.phone}</p>
        <p>{props.location}</p>
      </section>
    </div>
  );
}

export default UserInfo;
