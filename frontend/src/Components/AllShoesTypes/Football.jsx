import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Football = () => {
  const [football, setFootball] = useState([]);

  const getFootballShoes = async () => {
    const respons = await axios.get(
      `https://shoessafari-1.onrender.com/product/football`
    );
    setFootball(respons.data.football);
    console.log(respons.data.football);
  };

  useEffect(() => {
    getFootballShoes();
  }, []);

  return (
    <>
      {/* Images */}

      <div className=" w-[full] h-[700px] mt-[50px]">
        <div className="w-[85%] h-full mx-auto flex justify-between items-center ">
          <div className=" w-[600px] h-full  ">
            <img
              className="w-full h-full object-cover rounded-sm  "
              src="https://images.unsplash.com/photo-1574772135913-d519461c3996?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="loadind"
            />
          </div>
          <div className=" w-[600px] h-full ">
            <img
              className="w-full h-full object-cover rounded-sm  "
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt="loadind"
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className=" w-full h-[250px]  ">
        <div className=" w-[50%] mx-auto h-full flex flex-col items-center  justify-center gap-4">
          <h1 id="heading" className="text-4xl ">
            Football is Love
          </h1>
          <p className="text-xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi molestiae similique dignissimos repellendus dicta, iusto
            expedita eius consectetur natus
          </p>
          {/* <a href="#footballShoes">
            <button className="w-[150px] h-[50px] bg-black rounded-3xl text-white transform hover:scale-105 duration-300 text-lg">
              Shop Now
            </button>
          </a> */}
        </div>
      </div>

      {/* Mapping */}

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
                  <h1 className="font-semibold text-lg">₹ {foot.price}</h1>
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
