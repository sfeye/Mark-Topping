import React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

const EMAIL = {
  value: "marktoppingmedia@gmail.com",
  icon: <FaEnvelope />,
  link: "mailto:marktoppingmedia@gmail.com",
};
const TWITTER = {
  name: "@topping_media",
  icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
  link: "",
};
const FACEBOOK = {
  value: "Mark Topping Media (launching Summer 2022)",
  icon: (
    <FaFacebook
      style={{ color: "#3b5998", backgroundColor: "black", borderRadius: 50 }}
    />
  ),
  link: "",
};
const INSTAGRAM = {
  value: "@marktoppingmedia",
  icon: (
    <FaInstagram
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        color: "black",
        borderRadius: 10,
      }}
    />
  ),
  link: "",
};
const TIKTOK = {
  value: "@marktoppingmedia",
  icon: (
    <SiTiktok
      style={{
        color: "#111111",
        filter:
          "drop-shadow(2px 0px 0px #FD3E3E) drop-shadow(-2px -2px 0px #4DE8F4)",
      }}
    />
  ),
  link: "https://www.tiktok.com/t/ZTdwUbV6P/",
};
const YOUTUBE = {
  value: "Mark Topping Media",
  icon: <FaYoutube style={{ color: "#FF0000" }} />,
  link: "https://youtube.com/channel/UC20kfZT9rTubWCAZKkam3yg",
};

export default {
  EMAIL,
  TWITTER,
  FACEBOOK,
  INSTAGRAM,
  TIKTOK,
  YOUTUBE,
};
