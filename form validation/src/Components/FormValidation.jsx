import React, { Component } from "react";
import FormComponent from "./FormComponent.jsx";

class FormValidation extends Component {
  state = {
    firstname: "",
    lastname: "",
    isFriendly: true,
    gender: "",
    favColor: "blue"
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }
  handleSubmit(event) {
    console.log("submit");
  }

  render() {
    return (
      <div>
        <FormComponent
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default FormValidation;
