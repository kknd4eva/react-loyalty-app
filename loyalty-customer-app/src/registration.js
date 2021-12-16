import "./Registration.css";
import RegistrationSocial from "./RegistrationSocial";
import RegistrationEmail from "./RegistrationEmail";
import RegistrationDisclaimer from "./RegistrationDisclaimer";
import logo from "./images/priceline_sisterhood_logo.png";

function Registration() {
  return (
    <div className="Registration">
      <div iphone-x-3>
        <div className="container">
          <div className="card">
            <img className="photo" src={logo} /> <br />
            <div className="container2">
              <div class="row d-flex align-items-center justify-content-center">
                <h3 class="text-center mt-3">
                  Join with over 5 Trillion SisterClub Members{" "}
                </h3>{" "}
                <div className="container-bottom">
                  <RegistrationSocial />
                  <RegistrationEmail />
                  <RegistrationDisclaimer />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Registration;
