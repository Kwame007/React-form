import React from "react";

function Card(props) {
  // console.log(props);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        maxWidth: "500px",
        margin: "100px auto",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
