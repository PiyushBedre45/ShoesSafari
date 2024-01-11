import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllMarchandise = () => {
  const [allMarchandise, setAllMarchandise] = useState([]);

  const getAllMarchandise = async () => {
    const respons = await axios.get(`http://localhost:3000/marchandise`);
    setAllMarchandise(respons.data.marchan);
  };
  useEffect(() => {
    getAllMarchandise();
  }, []);
  return (
    <>
      <div className="w-full h-full mt-[40px] ">
        <div className="w-[93%] mx-auto h-full  flex flex-wrap items-center  gap-7">
          {allMarchandise.map((marchans, index) => (
            <div className=" w-[450px] h-[540px]">
              <div
                key={marchans._id}
                id="tags"
                className=" w-[450px] h-[400px] flex flex-col gap-1 "
              >
                <Link to={`/marchandise/${marchans._id}`}>
                  <img
                    // onClick={() => handleOnClick(marchans._id)}
                    className="w-full h-full object-cover"
                    src={marchans.images[0].url}
                    alt="loading"
                  />
                </Link>
                <div className="flex flex-col">
                  {/* <p className="text-red-800 ">Bestseller</p> */}
                  <div className="w-[95%] flex justify-between items-center">
                    <h1 className="font-semibold text-lg">{marchans.name}</h1>
                    <h1 className="font-semibold text-lg">
                      ₹ {marchans.price}
                    </h1>
                  </div>
                  <p className="text-gray-400 ">{marchans.discription}</p>
                  <p className="text-gray-400">2 Colours</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllMarchandise;
