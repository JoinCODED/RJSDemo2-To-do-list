import React from "react";
import Age from "./Age";

const Profile = props => {
  console.log(props);
  return (
    <div>
      <h2>
        My name is {props.firstName} {props.lastName}{" "}
      </h2>
      <Age age={props.age} />
      <h4>Nice to meet you!</h4>
    </div>
  );
};

export default Profile;
