import React from "react";
import { Link } from "react-router-dom";

const MarchanNavbar = () => {
  return (
    <>
      <div className=" w-[100%] h-[70px]  flex items-center justify-center mt-[20px] ">
        <div
          id="navItems"
          className="  w-[85%] h-[90%] mx-auto flex items-center justify-center gap-6 text-lg font-semibold list-none  "
        >
          <div>
            <div className="text-5xl ">
              <Link to={"/"}>
                <img
                  className=" w-[75px] h-[60px] rounded-2xl "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYReTLOrXLVeSBLa92g6yneR2SCfKSrKF0w&usqp=CAU"
                  alt="Shoes"
                />
              </Link>
            </div>
          </div>
          <div className="  w-[85%] h-[90%] mx-auto flex items-center justify-center gap-6 text-lg font-semibold list-none  ">
            <Link to={"/"}>
              <li>Men</li>
            </Link>
            <Link to={"/"}>
              <button>Women</button>
            </Link>
            <Link to={"/"}>
              <li>Kids</li>
            </Link>
            <Link to={"/"}>
              <li>Bags</li>
            </Link>
            <Link to={"/"}>
              <li>Caps</li>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-300 w-[100%] rounded-md mt-[10px]" />
    </>
  );
};

export default MarchanNavbar;
