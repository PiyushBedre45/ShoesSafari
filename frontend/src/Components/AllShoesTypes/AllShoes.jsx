import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllShoes = () => {
  const [regulars, setRegular] = useState([]);

  const getRegular = async () => {
    const respons = await axios.get(
      `https://shoessafari.onrender.com/product/regular`
    );
    setRegular(respons.data.regular);
  };

  useEffect(() => {
    getRegular();
  }, []);

  return (
    <>
      <div className="w-full h-full mt-[40px] ">
        <div className="w-[93%] mx-auto h-full  flex flex-wrap items-center gap-7">
          {regulars.map((regular, index) => (
            <div className=" w-[450px] h-[540px]">
              <div
                key={regular.id}
                id="tags"
                className=" w-[450px] h-[400px] flex flex-col gap-1 "
              >
                <Link to={`/product/${regular._id}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={regular.images[0].url}
                    alt="loading"
                  />
                </Link>
                <div className="flex flex-col">
                  {/* <p className="text-red-800 ">Bestseller</p> */}
                  <div className="w-[95%] flex justify-between items-center">
                    <h1 className="font-semibold text-lg">{regular.name}</h1>
                    <h1 className="font-semibold text-lg">₹ {regular.price}</h1>
                  </div>
                  <p className="text-gray-400 ">{regular.discription}</p>
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

export default AllShoes;
