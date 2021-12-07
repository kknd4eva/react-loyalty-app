import React from "react";
import "./RegistrationEmail.css";

export default function RegistrationEmail(props) {
  return (
    <div className="RegistrationEmail">
      <div class="text-center mt-3">
        <br />
        <span>Sign Up with Email</span>
      </div>
      <div class="text-center mt-4">
        <div class="form-input">
          <i className="fa fa-envelope"> </i>
          <input type="text" class="form-control" placeholder="Email Address" />
        </div>
        <div class="form-input">
          <i className="fa fa-user"> </i>
          <input type="text" class="form-control" placeholder="User Name" />
        </div>
        <div class="form-input">
          <i className="fa fa-lock"> </i>
          <input type="text" class="form-control" placeholder="Password" />
        </div>
      </div>
      <button class="btn btn-primary signup"> Sign Up </button>
      <br />
      <br />
    </div>
  );
}
