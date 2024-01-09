import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-black flex items-center mt-[100px]">
        <div className=" w-[90%] mx-auto h-[70%]  text-white flex justify-between ml-[100px]  list-none ">
          <div>
            <h1 className="text-xl">Find A Store</h1>
            <div className=" flex flex-col gap-1 mt-[10px]">
              <li>Become a Member</li>
              <li>Send us Feedback</li>
            </div>
          </div>
          <div>
            <h1 className="text-xl">Get help</h1>
            <div className=" flex flex-col gap-1 mt-[10px]">
              <li>Order Status</li>
              <li>Dilivery</li>
              <li>Returns</li>
              <li>Payments Options</li>
              <li>Contact Us</li>
              <li>Inquires</li>
              <li></li>
            </div>
          </div>
          <div>
            <h1 className="text-xl">About Store</h1>
            <div className=" flex flex-col gap-1 mt-[10px]">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </div>
          </div>
          <div>
            {/* <h1 className="text-xl">About Store</h1> */}
            <div className="text-3xl flex gap-5 mt-[10px] ">
              <Link to={"#"}>
                <FaInstagram className="hover:text-gray-300" />
              </Link>
              <Link to={"#"}>
                <FaFacebook className="hover:text-gray-300" />
              </Link>
              <Link to={"#"}>
                <FaSquareXTwitter className="hover:text-gray-300" />
              </Link>
              <Link to={"#"}>
                <FaYoutube className="hover:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
