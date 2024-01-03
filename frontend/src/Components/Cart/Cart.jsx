import React, { useContext } from "react";
import { Context } from "../..";
import Login from "../Authetication/Login";
import { useCart } from "../../context/cartContext";
import Navbar from "../Important/Navbar";
import Footer from "../Important/Footer";
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useCart();
  const { isAuthenticate, SetIsAuthenticate } = useContext(Context);
  console.log(cart);

  // reduce is use to calculate all the prices from array
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // filter is use to alter the arr elements
  const deleteItemFromCart = (itemId) => {
    setCart(cart.filter((cartItem) => cartItem._id !== itemId));
  };

  return (
    <>
      {isAuthenticate ? (
        <>
          <Navbar />
          <div className=" w-full mt-[40px] ">
            <div className=" w-[70%]  mx-auto flex ">
              <div className=" w-full flex flex-col ">
                {/* Heading */}
                <h1 className="text-2xl font-semibold w-[90%] mx-auto">Cart</h1>
                {/* Mapping */}
                {cart.map((item) => (
                  <div>
                    <div className=" w-[100%] h-[260px] flex flex-col items-center justify-center gap-3 mt-[20px]">
                      <div className=" w-[90%] mx-auto h-[80%] flex items-center justify-center gap-3 ">
                        <div className="w-[180px] h-[180px]">
                          {/* Image */}
                          <img
                            className="rounded-sm w-full h-full object-cover"
                            src={item.images[0].url}
                            alt=""
                          />
                        </div>
                        <div className=" w-[350px] h-[180px] flex flex-col">
                          <div className="w-[90%] mx-auto flex flex-col gap-2 pt-2">
                            {/* Discription */}
                            <h1 id="Product" className="text-xl font-semibold ">
                              {item.name}
                            </h1>
                            <p className="text-gray-400 text-[17px]">
                              {item.discription}
                            </p>
                            <p className="text-gray-400 text-[17px]">
                              Lorem ipsum dolor hsaja jsdhf sug .
                            </p>
                            <h1 id="Product" className="text-md font-medium">
                              MRP : ₹ {item.price}💰
                            </h1>
                            {/* Delete */}
                            <AiTwotoneDelete
                              className="text-2xl"
                              onClick={() => deleteItemFromCart(item._id)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Horizontal line */}
                      <hr className="border-1 border-gray-300 w-[90%] rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
              <div className=" h-[100vh] w-full ">
                <div className=" w-[80%] mx-auto h-[500px] flex">
                  <div className=" w-[90%] mx-auto flex flex-col pt-[40px] gap-4 ">
                    <h1 className="text-3xl">Summary</h1>
                    <div className="flex justify-between">
                      <h1 className="text-[18px] font-semibold">Subtotal</h1>
                      <p className="text-[18px] font-semibold">₹ {total}</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-[18px] font-semibold">
                        Esitimate Dilivary & Handling
                      </h1>
                      <p className="text-[18px] font-semibold">₹ 1250</p>
                    </div>
                    <hr className="border-1 border-gray-300 w-[100%] rounded-md" />
                    <div className="flex justify-between">
                      <h1 className="text-[18px] font-semibold">Total</h1>
                      <p className="text-[18px] font-semibold">
                        ₹ {total + 1250}
                      </p>
                    </div>
                    <hr className="border-1 border-gray-300 w-[100%] rounded-md" />
                    <button className="w-full h-[55px] bg-black rounded-[50px] text-white transform hover:bg-gray-700 duration-100 text-md font-medium">
                      Member Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <h1>Plz Login first 👻</h1>
          <Login />
        </>
      )}
    </>
  );
};

export default Cart;
