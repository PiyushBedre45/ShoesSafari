import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Football = () => {
  const [football, setFootball] = useState([]);

  const getFootballShoes = async () => {
    const respons = await axios.get(`http://localhost:3000/product/football`);
    setFootball(respons.data.football);
    console.log(respons.data.football);
  };

  useEffect(() => {
    getFootballShoes();
  }, []);

  return (
    <>
      <div className="w-full h-full mt-[40px] ">
        <div className="w-[93%] mx-auto h-full  flex flex-wrap items-center justify-between gap-7">
          {football.map((foot, index) => (
            <div className=" w-[450px] h-[540px]">
              <div
                key={foot.id}
                id="tags"
                className=" w-[450px] h-[400px] flex flex-col gap-1 "
              >
                <Link to={`/product/${foot._id}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={foot.images[0].url}
                    alt="loading"
                  />
                </Link>
                <div className="flex flex-col">
                  {/* <p className="text-red-800 ">Bestseller</p> */}
                  <h1 className="font-semibold text-lg">{foot.name}</h1>
                  <p className="text-gray-400 ">{foot.discription}</p>
                  <p className="text-gray-400">2 Colours</p>
                  <h1 className="font-semibold text-lg">
                    MRP : ₹ {foot.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Football;
