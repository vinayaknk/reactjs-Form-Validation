import React from "react";

const FormComponent = props => {
  return (
    <nav className="navbar navbar-dark  bg-primary">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastname"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <h3>
            {props.firstname} {props.lastname}
          </h3>
        </div>
        <div className="form-group">
          <textarea
            onChange={props.handleChange}
            placeholder="Some default value"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={props.isFriendly}
            name="isFriendly"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Is Friendly?
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Female
          </label>
        </div>
        <div className="col-auto my-1">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
            Favorite Color
          </label>
          <select
            className="custom-select mr-sm-2"
            name="favColor"
            value={props.favColor}
            onChange={props.handleChange}
          >
            {/* <option selected>Choose...</option> */}
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
          </select>
        </div>
        <button>Submit</button>

        <hr></hr>
        <h2>Your Entered Information: </h2>
        <div className="form-group">
          <h5>
            Your name: {props.firstname} {props.lastname}
          </h5>
          <h5>Your Gender: {props.gender}</h5>
          <h5>Your Favorite Color : {props.favColor}</h5>
        </div>
      </form>
    </nav> 
  );
};

export default FormComponent;
