import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
// import { SiNike } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { SiJordan } from "react-icons/si";
import { PiBagLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const clickOnBars = () => {
  const floatDiv = document.querySelector("#box");
  floatDiv.classList.remove("right-[-100%]");
  floatDiv.classList.add("right-[0%]");

  document.body.classList.add("overflow-y-hidden");
  console.log("hipiyu");
};
const clickOnCross = () => {
  const floatDiv = document.querySelector("#box");
  floatDiv.classList.remove("right-[0%]");
  floatDiv.classList.add("right-[-100%]");
  document.body.classList.remove("overflow-y-hidden");
  console.log("hipiyu");
};

const Navbar = () => {
  return (
    <>
      <div
        id="nav"
        className="w-[100%] h-[70px]  flex items-center justify-center mt-[20px] "
      >
        <div className="w-[85%] h-[90%] mx-auto flex justify-between items-center text-lg font-semibold ">
          <div className="text-5xl ">
            <Link to={"/"}>
              <img
                className=" w-[75px] h-[60px] rounded-2xl "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYReTLOrXLVeSBLa92g6yneR2SCfKSrKF0w&usqp=CAU"
                alt="Shoes"
              />
            </Link>
          </div>
          <div>
            <div id="navItems" className="hidden sm:list-none sm:flex sm:gap-6">
              <Link to={"/newFeature"}>
                <li>New Feature</li>
              </Link>
              <Link to={"/product/regular/men"}>
                <li>Men</li>
              </Link>
              <Link to={"/product/regular/women"}>
                <button>Women</button>
              </Link>
              <Link to={"/product/regular/kid"}>
                <li>Kids</li>
              </Link>
              <Link to={"/sale"}>
                <li>Sale</li>
              </Link>
              <Link to={"/marchandise"}>
                <li>Marchandise</li>
              </Link>
            </div>
          </div>

          <div className="flex gap-2 items-center text-4xl ">
            <CiSearch className="p-1 rounded-3xl hover:bg-gray-200 " />
            <HiBars3BottomRight
              className="p-1 rounded-3xl hover:bg-gray-200"
              onClick={clickOnBars}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          id="box"
          className="w-[300px] h-[100vh] bg-white fixed right-[-100%] top-0 transition-all duration-500  z-20 "
        >
          <div className="  w-[100%] h-[40px] flex items-center justify-end pr-[10px] mt-[20px] ">
            <RxCross2
              className="p-1 rounded-3xl hover:bg-gray-200 text-4xl mr-[20px]"
              onClick={clickOnCross}
            />
          </div>
          <div className="w-[80%] mx-auto mt-[20px] flex flex-col gap-4 text-2xl font-semibold ">
            <h1>New & Featured</h1>
            <h1>Men</h1>
            <h1>Women</h1>
            <h1>Kids</h1>
            <h1>Sale</h1>
            <h1>SNEAKERS</h1>
          </div>
          <div className="text-3xl w-[70%] mx-auto  mt-[40px] flex gap-4 items-center">
            <SiJordan />
            <h1 className="text-xl">Jordan</h1>
          </div>
          <div className="w-[80%] mx-auto flex flex-col gap-4 text-2xl mt-[40px]  ">
            <div className="flex items-center gap-5">
              <PiBagLight className="cursor-pointer" />
              <h1 className="text-xl">Bag</h1>
            </div>
            <div className="flex items-center gap-5">
              <BsBoxSeam className="cursor-pointer" />
              <h1 className="text-xl">Order</h1>
            </div>
            <div className="flex items-center gap-5">
              <HiOutlineBuildingStorefront className="cursor-pointer" />
              <h1 className="text-xl">Find a Store</h1>
            </div>
            <div className="flex items-center gap-5">
              <FiHelpCircle className="cursor-pointer" />
              <h1 className="text-xl">Help</h1>
            </div>
          </div>
          <div className=" text-md font-semibold flex items-center gap-4 justify-center mt-[40px]">
            <button className="w-[100px] h-[40px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300">
              Join Us
            </button>
            <button className="w-[100px] h-[40px] rounded-3xl border-2 border-black transform hover:scale-105 duration-300">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
