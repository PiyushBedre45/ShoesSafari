import axios from "axios";
import React, { useContext, useState } from "react";
import { SiJordan } from "react-icons/si";
import { Context, server } from "../..";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const { data } = await axios.post(
        `${server}/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        }
      );
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" w-full h-[100vh] flex items-center ">
          <div className=" w-[50%] mx-auto h-[80%]">
            <div className=" w-[60%] mx-auto flex flex-col gap-5 ">
              <div className="flex gap-4">
                <img
                  className=" w-[75px] h-[60px] rounded-2xl "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYReTLOrXLVeSBLa92g6yneR2SCfKSrKF0w&usqp=CAU"
                  alt="Shoes"
                />
                <SiJordan className="text-5xl" />
              </div>
              <h1 id="heading" className="text-3xl">
                Enter your details for registration
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div className="flex flex-col gap-2">
                <input
                  className="border-2 border-gray-400 hover:border-black w-full h-[50px]  rounded-md p-4"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="border-2 border-gray-400 hover:border-black w-full h-[50px]  rounded-md p-4"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="border-2  border-gray-400 hover:border-black w-full h-[50px]  rounded-md p-4"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>

              <div>
                <button
                  type="submit"
                  className="w-[160px] h-[45px] bg-black rounded-[40px] text-white transform hover:bg-gray-700 duration-100 text-xl font-medium float-right"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registration;
