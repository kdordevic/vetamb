import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Social() {
  return (
    <div className="social">
      <button
        className="social-icon"
        role="link"
        onClick={() =>
          openInNewTab(
            "https://www.instagram.com/love_pet_ordinacija?igsh=Zmg5MGN6czU5eGZj&utm_source=qr"
          )
        }
      >
        <FontAwesomeIcon icon={faSquareInstagram} />
      </button>
      <button
        className="social-icon"
        role="link"
        onClick={() =>
          openInNewTab(
            "https://www.facebook.com/share/C3pzwKwbRPs9ihFL/?mibextid=LQQJ4d"
          )
        }
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
      </button>
      <button
        className="social-icon"
        role="link"
        onClick={() => openInNewTab("https://linkedin.com")}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
    </div>
  );
}

export default Social
