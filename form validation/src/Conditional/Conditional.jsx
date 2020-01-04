import React, { Component } from "react";

function HandleClick() {
  console.log("hi.....");
  return <h2>Hi</h2>;
}
const Conditional = props => {
  console.log(props.isLoggedIn);
  return (
    <button onClick={HandleClick} className="btn btn-primary">
      Login
    </button>
  );
};

export default Conditional;
