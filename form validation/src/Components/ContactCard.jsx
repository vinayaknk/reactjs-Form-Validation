import React from "react";

const ContactCard = props => {
  return (
    <div>
      <h3 style={{ display: props.contact.name ? "block" : "none" }}>
        {props.contact.name}
      </h3>
      <p>{props.contact.phone}</p>
      <p>{props.contact.Email}</p>
      <hr></hr>
    </div>
  );
};

export default ContactCard;
