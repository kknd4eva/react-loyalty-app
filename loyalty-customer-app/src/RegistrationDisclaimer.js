import React from "react";
import "./RegistrationDisclaimer.css";

export default function RegistrationDisclaimer(props) {
  return (
    <div className="RegistrationDisclaimer">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          I agree to give you all my info{" "}
        </label>{" "}
        <span> </span>{" "}
      </div>{" "}
      <span> Already a member ? </span> <span> </span>{" "}
      <a href="http://www.priceline.com.au" class="text-decoration-none">
        Login{" "}
      </a>{" "}
      <div>
        <span> See the </span>{" "}
        <a
          href="https://www.google.com/help/public_data_disclaimer.html"
          class="text-decoration-none"
        >
          Disclaimer{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}
