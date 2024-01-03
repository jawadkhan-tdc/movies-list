import Image from "next/image";
import React from "react";
import footImage from "../../../public/image.png";

const Footer = () => {
  return (
    <Image
      style={{
        width: "100vw",
        position: "fixed",
        bottom: 0,
      }}
      src={footImage}
      alt=""
    />
  );
};

export default Footer;
