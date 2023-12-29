import React from "react";
import facebook from "../assets/socials/facebook.svg";
import twitter from "../assets/socials/twitter.svg";
import instagram from "../assets/socials/instagram.svg";
import NavLinks from "./NavLinks";

const socals_list = [
  { id: 1, name: "facebook", img: facebook },
  { id: 2, name: "twitter", img: twitter },
  { id: 3, name: "instagram", img: instagram },
];

function SocialHandles() {
  return socals_list.map((item) => (
    <img key={item.id} src={item.img} alt={item.name} className="img_socials" />
  ));
}

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerUnderLine" />
      <div className="boxRow space_between footerLink">
        <h1 className="!text-white">Audio Boss</h1>
        <ul className="boxRow gap_3">
          <NavLinks />
        </ul>
      </div>

      <div className="gap_3 footerSocals">
        <div className="w_50 gap_3 boxColumn left">
          <p className="header_body opacity_50">
            Audio Boss is an one stop for the audio projects.
          </p>
          <p className="text_body_white opacity_50 w_100">
            Copyright 2023. All Rights Reserved
          </p>
        </div>
        <div className="box_row gap_1 right w_50">
          <SocialHandles />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
