import React from "react";
import "./RegistrationSocial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function RegistrationSocial(props) {
  return (
    <div className="RegistrationSocial">
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
    </div>
  );
}
