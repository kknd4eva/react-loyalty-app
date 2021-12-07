import "./registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Registration() {
  return (
    <div className="Registration">
      <header />
      <div className="card">
        <div class="row d-flex align-items-center justify-content-center">
          <h3 class="text-center mt-3">
            Join over 5 trillion <br /> SisterClub Members
          </h3>
        </div>
        <div class="text-center mt-3">
          <span> Sign up with these social profiles </span>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <div class="flexbox-container">
            <a href="https://www.youtube.com" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
            </a>
            <a href="https://www.facebook.com" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="cyan" />
            </a>
            <a href="https://www.instagram.com/" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="orange" />
            </a>
          </div>
        </div>
        <div class="text-center mt-3">
          <br />
          <span>Sign Up with Email</span>
        </div>
        <div class="text-center mt-4">
          <div class="form-input">
            <i className="fa fa-envelope"> </i>
            <input
              type="text"
              class="form-control"
              placeholder="Email Address"
            />
          </div>
          <div class="form-input">
            <i className="fa fa-user"> </i>
            <input type="text" class="form-control" placeholder="User Name" />
          </div>
          <div class="form-input">
            <i className="fa fa-lock"> </i>
            <input type="text" class="form-control" placeholder="Password" />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              I agree to give you all my info
            </label>
            <br />
          </div>
          <button class="btn btn-primary signup"> Sign Up </button>
          <br />
          <br />
          <span> Already a member ? </span>
          <a href="http://www.priceline.com.au" class="text-decoration-none">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
