import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-black flex items-center mt-[100px]">
        <div className=" w-[70%] h-[70%]  text-white flex justify-between ml-[100px]  list-none ">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
