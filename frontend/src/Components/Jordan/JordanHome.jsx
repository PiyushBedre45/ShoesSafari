// change the jordan api

import React from "react";
import { SiJordan } from "react-icons/si";

const JordanHome = () => {
  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-center mt-[40px]">
        <SiJordan className="text-7xl" />
      </div>
      <div className=" w-full h-[250px] ">
        <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4">
          <h1 id="heading" className="text-4xl ">
            Jordan is here
          </h1>
          <p className="text-xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi molestiae similique dignissimos repellendus dicta, iusto
            expedita eius consectetur natus
          </p>
          {/* <Link to={"/shoes"}>
            <button className="w-[150px] h-[50px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300 text-lg">
              Shop Now
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default JordanHome;
