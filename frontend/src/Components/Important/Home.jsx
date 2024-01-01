import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <div className=" w-full h-[600px] mt-10 ">
        <div className=" w-[95%] mx-auto h-full">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://d1nymbkeomeoqg.cloudfront.net/photos/28/53/406870_3175_XXL.jpg"
            alt="loading"
          />
        </div>
      </div> */}

      <div className=" w-full h-[250px] mt-[40px]  ">
        <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4">
          <h1 id="heading" className="text-4xl ">
            Find Your Perfect Pair
          </h1>
          <p className="text-xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi molestiae similique dignissimos repellendus dicta, iusto
            expedita eius consectetur natus
          </p>
          <Link to={"/shoes"}>
            <button className="w-[150px] h-[50px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300 text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className=" w-[full] h-[700px] mt-[50px]">
        <div className="w-[85%] h-full mx-auto flex justify-between items-center ">
          <div className=" w-[600px] h-full  ">
            <img
              className="w-full h-full object-cover rounded-sm  "
              src="https://images.unsplash.com/photo-1533215680-d16151dd9228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0MzY3NTQzNnx8ZW58MHx8fHx8"
              alt="loadind"
            />
          </div>
          <div className=" w-[600px] h-full ">
            <img
              className="w-full h-full object-cover rounded-sm  "
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt="loadind"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
