import "./Registration.css";
import RegistrationSocial from "./RegistrationSocial";
import RegistrationEmail from "./RegistrationEmail";
import RegistrationDisclaimer from "./RegistrationDisclaimer";
import logo from "./images/priceline_sisterhood_logo.png";

function Registration() {
  return (
    <div className="Registration">
      <div className="container">
        <div className="card">
          <img src={logo} />
          <br />
          <div className="container2">
            <div class="row d-flex align-items-center justify-content-center">
              <h3 class="text-center mt-3">
                Join with over 5 Trillion SisterClub Members
              </h3>
              <RegistrationSocial />
              <RegistrationEmail />
              <RegistrationDisclaimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
