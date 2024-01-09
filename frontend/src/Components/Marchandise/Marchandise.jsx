import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { Context } from "../..";
import toast from "react-hot-toast";

const Marchandise = () => {
  const [cart, setCart] = useCart([]);
  const [marchandises, setMarchandise] = useState();
  const { id } = useParams();

  const getMarchanDetails = async () => {
    const respons = await axios.get(`http://localhost:3000/marchandise/${id}`);
    setMarchandise(respons.data.marchan);
  };

  useEffect(() => {
    getMarchanDetails();
  }, []);

  return (
    <>
      <div className=" w-full h-[90vh] flex items-center justify-center gap-[80px] ">
        <div className=" w-[460px] h-[550px] ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={marchandises?.images[0].url}
            alt=""
          />
        </div>
        <div className=" w-[400px] h-[550px] ">
          <div className=" w-[90%] mx-auto flex flex-col gap-1">
            <h1 id="Product" className="text-3xl font ">
              {marchandises?.name}
            </h1>
            <p className="text-gray-400 text-[17px]">
              {marchandises?.discription}
            </p>
            <h1 id="Product" className="text-2xl font-medium">
              MRP : ₹ {marchandises?.price}
            </h1>
            <p className="text-gray-400">Also included taxes</p>
            <p className="text-[18px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ea magnam nulla nesciunt. Eligendi commodi temporibus quidem eius
              doloribus sint incidunt error optio magnam ipsa voluptate,
              voluptas delectus culpa dolores.
            </p>
            <div className="w-[full] flex flex-col gap-2 mt-4">
              <Link to={"/cart"}>
                <button
                  className="w-full h-[60px] bg-black rounded-[50px] text-white transform hover:bg-gray-700 duration-100 text-xl font-medium"
                  onClick={() => {
                    setCart([...cart, marchandises]);
                    toast.success("Successfully Added");
                  }}
                >
                  Add to Cart
                </button>
              </Link>
              <button className="w-full h-[60px] rounded-[50px] border-2 border-gray-300 hover:border-black transform duration-300 text-xl font-medium">
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marchandise;
