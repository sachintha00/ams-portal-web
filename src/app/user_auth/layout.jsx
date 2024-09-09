import React from "react";
import NextImage from "next/image";
import SideImage from "../_assets/images/auth_page_side_image.png";

const AuthLayout = ({ children }) => {
  return (
    <section className="bg-white">
      <div className="flex justify-center min-h-screen">
        <NextImage
          className="hidden bg-cover lg:block lg:w-2/5"
          src={SideImage}
          alt="side-image"
        ></NextImage>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
