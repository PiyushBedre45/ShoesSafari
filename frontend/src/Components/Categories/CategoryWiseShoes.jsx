import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryWiseShoes = () => {
  const [shoes, setShoes] = useState([]);
  const { cate } = useParams();

  const getMenShoes = async () => {
    if (cate === "men") {
      const respons = await axios.get(
        `https://shoessafari-1.onrender.com/product/regular/${cate}`
      );

      setShoes(respons.data.men);
    } else if (cate === "women") {
      const respons = await axios.get(
        `https://shoessafari-1.onrender.com/product/regular/${cate}`
      );
      setShoes(respons.data.women);
    } else if (cate === "kid") {
      const respons = await axios.get(
        `https://shoessafari-1.onrender.com/product/regular/${cate}`
      );

      setShoes(respons.data.kid);
    } else {
      console.log("No Shoes Available For This Category");
    }
  };

  useEffect(() => {
    getMenShoes();
  }, [cate]);

  return (
    <>
      <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4 mt-[40px]">
        <h1 id="heading" className="text-4xl ">
          Shoes for {cate}'s
        </h1>
      </div>
      <div className="w-full h-full mt-[60px] ">
        <div className="w-[93%] mx-auto h-full flex flex-wrap items-center gap-7">
          {shoes.map((shoe, index) => (
            <div className=" w-[450px] h-[540px] ">
              <div
                key={shoe.id}
                id="tags"
                className=" w-[450px] h-[400px] flex flex-col gap-2 "
              >
                <Link to={`/product/${shoe._id}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={shoe.images[0].url}
                    alt="loading"
                  />
                </Link>
                <div className="flex flex-col">
                  {/* <p className="text-red-800 ">Bestseller</p> */}
                  <div className="w-[95%] flex items-center justify-between">
                    <h1 className="font-semibold text-lg">{shoe.name}</h1>
                    <h1 className="font-semibold text-lg">₹ {shoe.price}</h1>
                  </div>
                  <p className="text-gray-400 ">{shoe.discription}</p>
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

export default CategoryWiseShoes;
