import React from "react";
import { getSocialMedia } from "../../utils/getSocialMedia";

const SocialMediaContainer = () => {
  const socialMedia = getSocialMedia();
  return (
    <ul>
      {socialMedia.map((link, i) => {
        return (
          <li key={i}>
            {" "}
            <img src={link} alt="media" />{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaContainer;
