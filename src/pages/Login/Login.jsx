import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <div className="relative max-w-screen-lg mx-auto my-10 bg-green-300 p-4 rounded-3xl">
        <div className=" absolute h-1/2 top-0 left-[100px] rounded-b-lg  shadow-2xl w-[150px] bg-gray-500">
          <div className="flex justify-around">
            <div className="h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
            <div className="h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
            <div className="h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
          </div>
          <h1 className="font-bold text-white text-2xl mt-4 text-center">
            Login With
          </h1>
          <div className="text-center">
            <button className="p-2  rounded-full bg-blue-700 border-green-500">
              <BsFacebook className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="flex  justify-center items-center">
          <div className="h-[150px] w-[150px] bg-green-300 rounded-full border-4 mb-4 border-white">
            <img src="https://i.ibb.co/DWLpzmw/login-avater.png" alt="" />
          </div>
        </div>
        <div>
          <form action="" className="flex gap-4 flex-col w-1/3 mx-auto">
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="h-12 border p-2 border-green-500 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                className="h-12 border p-2 border-green-500 w-full"
              />
            </div>
            <div>
              <p>
                Don't have account{" "}
                <span>
                  <Link to="/register">
                    <span className="border-b-2 border-blue-500">Register</span>
                  </Link>
                </span>
              </p>
            </div>
            <div className="text-center">
              <button className="p-2 border-2 border-green-500">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
