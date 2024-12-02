import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails } from "../../constants";

const Footer = () => {
  return (
    <div className="bg-gray-400 py-[2rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[8rem] object-contain"
          />
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex gap-1 items-center">
              <h4 className="text-lg font-semibold ">Phone: </h4>
              <p className="font-semibold text-gray-600 ">
                {clientDetails.phone}
              </p>
            </div>
            {/* <div className="flex gap-2 flex-wrap">
              <h4 className="text-lg font-semibold max-w-[14rem]  inline gap-2">
                Address:{" "}
                <span className="font-semibold text-gray-600 ">
                  C/O-Trilochan
                  <br /> Sethi,Dhutitirtha,Gandhi chhack,Chauliaganj,
                  <br />
                  Cuttack,Odisha-753004
                </span>
              </h4>
            </div> */}
            <div className="flex gap-1 items-center">
              <h4 className="text-lg font-semibold ">Email: </h4>
              <p className="font-semibold text-gray-600 ">
                {clientDetails.email}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex mt-3 gap-5 justify-start">
            <Link>
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link>
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
