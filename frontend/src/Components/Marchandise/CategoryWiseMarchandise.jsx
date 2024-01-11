import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryWiseMerchandise = () => {
  const [merchandise, setMerchandise] = useState([]);
  const { category } = useParams();
  console.log(category);

  const getCateMerchandise = async () => {
    if (category === "men") {
      const response = await axios.get(
        `http://localhost:3000/marchandise/regular/${category}`
      );
      setMerchandise(response.data.menMerchan);
    } else if (category === "women") {
      const response = await axios.get(
        `http://localhost:3000/marchandise/regular/${category}`
      );
      setMerchandise(response.data.womenMerchan);
    } else if (category === "bag") {
      const response = await axios.get(
        `http://localhost:3000/marchandise/regular/${category}`
      );
      setMerchandise(response.data.bag);
    } else if (category === "cap") {
      const response = await axios.get(
        `http://localhost:3000/marchandise/regular/${category}`
      );
      setMerchandise(response.data.cap);
    }
  };

  useEffect(() => {
    getCateMerchandise();
  }, [category]);

  return (
    <>
      <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4 mt-[40px]">
        <h1 id="heading" className="text-4xl ">
          Select your Marchandisse
        </h1>
      </div>
      <div className="w-full h-full mt-[60px] ">
        <div className="w-[93%] mx-auto h-full  flex flex-wrap items-center gap-7">
          {merchandise.map((marchan, index) => (
            <div className=" w-[450px] h-[540px] ">
              <div
                key={marchan._id}
                id="tags"
                className=" w-[450px] h-[400px] flex flex-col gap-2 "
              >
                <Link to={`/marchandise/${marchan._id}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={marchan.images[0].url}
                    alt="loading"
                  />
                </Link>
                <div className="flex flex-col">
                  {/* <p className="text-red-800 ">Bestseller</p> */}
                  <div className="w-[95%] flex justify-between items-center">
                    <h1 className="font-semibold text-lg">{marchan.name}</h1>
                    <h1 className="font-semibold text-lg">₹ {marchan.price}</h1>
                  </div>
                  <p className="text-gray-400 ">{marchan.discription}</p>
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

export default CategoryWiseMerchandise;
