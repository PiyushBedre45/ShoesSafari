import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const submitOnMen = (cate) => {
    console.log(cate);
  };

  return (
    <>
      <div className=" w-full h-[250px]">
        <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4">
          <h1 id="heading" className="text-4xl ">
            Select Your Categori
          </h1>
          <p className="text-xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi molestiae similique dignissimos repellendus dicta, iusto
            expedita eius consectetur natus
          </p>
        </div>
      </div>
      <div className="w-full h-[500px] mt-[100x] ">
        <div className="w-[85%] mx-auto h-[500px]  flex items-center justify-between gap-4">
          <div className="relative  w-[400px] h-[500px]">
            <img
              className="  w-full h-full object-cover rounded-sm "
              src="https://images.unsplash.com/photo-1637916676452-5abf58e75a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxzb2NBYXVhdWxQSXx8ZW58MHx8fHx8"
              alt=""
            />
            <Link to={"/product/regular/men"}>
              <button
                className="absolute w-[100px] h-[40px] rounded-3xl  bg-gray-100  transform hover:scale-105 duration-300 bottom-0 ml-[30px] mb-[20px] text-md font-semibold"
                onClick={() => submitOnMen("men")}
              >
                Men
              </button>
            </Link>
          </div>
          <div className="relative  w-[400px] h-[500px]">
            <img
              className="  w-full h-full object-cover rounded-sm "
              src="https://images.unsplash.com/photo-1634001112793-60a4c8f34875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              alt=""
            />
            <Link to={"/product/regular/women"}>
              <button
                className="absolute w-[100px] h-[40px] rounded-3xl  bg-gray-100  transform hover:scale-105 duration-300 bottom-0 ml-[30px] mb-[20px] text-md font-semibold"
                onClick={() => submitOnMen("women")}
              >
                Women
              </button>
            </Link>
          </div>
          <div className="relative  w-[400px] h-[500px]">
            <img
              className="  w-full h-full object-cover rounded-sm "
              src="https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
              alt=""
            />
            <Link to={"/product/regular/kid"}>
              <button
                className="absolute w-[100px] h-[40px] rounded-3xl  bg-gray-100  transform hover:scale-105 duration-300 bottom-0 ml-[30px] mb-[20px] text-md font-semibold"
                onClick={() => submitOnMen("kid")}
              >
                Kid
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
