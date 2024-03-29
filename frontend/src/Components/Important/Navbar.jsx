import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
// import { SiNike } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { SiJordan } from "react-icons/si";
import { PiBagLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../..";
import { useAuth } from "../../context/authContext";

const clickOnBars = () => {
  const floatDiv = document.querySelector("#box");
  floatDiv.classList.remove("right-[-100%]");
  floatDiv.classList.add("right-[0%]");

  document.body.classList.add("overflow-y-hidden");
};
const clickOnCross = () => {
  const floatDiv = document.querySelector("#box");
  floatDiv.classList.remove("right-[0%]");
  floatDiv.classList.add("right-[-100%]");
  document.body.classList.remove("overflow-y-hidden");
};

const Navbar = () => {
  const { isAuthenticate } = useContext(Context);
  const [auth, setAuth] = useAuth();

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
              <Link to={"/gift"}>
                <li>Gift🎁</li>
              </Link>
              <Link to={"/marchandise"}>
                <li>Marchandise</li>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center text-4xl ">
            <CiSearch className="p-1 rounded-md hover:bg-gray-200 " />
            <Link to={"/cart"}>
              <PiShoppingCartSimpleDuotone className="text-[36px] p-1 rounded-md hover:bg-gray-200 " />
            </Link>
            <HiBars3BottomRight
              className="p-1 rounded-md hover:bg-gray-200"
              onClick={clickOnBars}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          id="box"
          className="w-[300px] h-[100vh] bg-white fixed right-[-100%] top-0 transition-all duration-500 z-20 "
        >
          <div className="  w-[100%] h-[40px] flex items-center justify-end pr-[10px] mt-[20px] ">
            <RxCross2
              className="p-1 rounded-md hover:bg-gray-200 text-4xl mr-[20px]"
              onClick={clickOnCross}
            />
          </div>
          <div className="w-[80%] mx-auto mt-[20px] flex flex-col gap-4 text-2xl font-semibold list-none ">
            <div className="flex gap-1 items-center">
              <CgProfile />
              {isAuthenticate ? (
                <h1 className="text-[15px]">Hi, {auth.user.name}</h1>
              ) : (
                <h1 className="text-[15px]">Hi, User</h1>
              )}
            </div>

            <Link to={"/product/regular/men"}>
              <li>Men</li>
            </Link>
            <Link to={"/product/regular/women"}>
              <button>Women</button>
            </Link>
            <Link to={"/product/regular/kid"}>
              <li>Kids</li>
            </Link>
            <h1>Sale</h1>
            <Link to={"/football"}>
              <h1>Football Shoes</h1>
            </Link>
          </div>
          <Link to={"/jordan"}>
            <div className="text-3xl w-[70%] mx-auto  mt-[40px] flex gap-4 items-center">
              <SiJordan />
              <h1 className="text-xl">Jordan</h1>
            </div>
          </Link>
          <div className="w-[80%] mx-auto flex flex-col gap-4 text-2xl mt-[40px]  ">
            <Link to={"/cart"}>
              <div className="flex items-center gap-5">
                <PiBagLight className="cursor-pointer" />
                <h1 className="text-xl">Bag</h1>
              </div>
            </Link>
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
            {isAuthenticate ? (
              <Link to={"/profile"}>
                <button className="w-[100px] h-[40px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300">
                  Profile
                </button>
              </Link>
            ) : (
              <Link to={"/register"}>
                <button className="w-[100px] h-[40px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300">
                  Join Us
                </button>
              </Link>
            )}

            {isAuthenticate ? (
              <button
                className="w-[100px] h-[40px] rounded-3xl border-2 border-black transform hover:scale-105 duration-300"
                onClick={() => {
                  alert("really");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="w-[100px] h-[40px] rounded-3xl border-2 border-black transform hover:scale-105 duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr className="border-1 border-gray-300 w-[100%] rounded-md mt-[10px]" />
      </div>
    </>
  );
};

export default Navbar;
