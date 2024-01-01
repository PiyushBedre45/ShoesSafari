import React, { useContext, useState } from "react";
import { SiJordan } from "react-icons/si";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../..";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticate, SetIsAuthenticate } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      SetIsAuthenticate(true);
    } catch (error) {
      toast.error(error.response.data.message);
      SetIsAuthenticate(false);
    }
  };
  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  }
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
                Enter your email to join us
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div className="flex flex-col gap-2">
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

              <div className="flex gap-3">
                <button className="w-[160px] h-[45px] bg-black rounded-[40px] text-white transform hover:bg-gray-700 duration-100 text-xl font-medium float-right">
                  Login
                </button>
                <Link to={"/register"}>
                  <button
                    type="submit"
                    className="w-[160px] h-[45px] border-2 border-gray-400 hover:border-black rounded-[40px] transfor duration-100 text-xl font-medium float-right"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
