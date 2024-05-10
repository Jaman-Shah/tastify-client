import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Register = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo_url = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photo_url, password);
  };

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
          <form
            onSubmit={handleRegister}
            className="flex gap-4 flex-col w-1/3 mx-auto"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="h-12 border p-4 border-green-500 w-full rounded-xl"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="h-12 border p-4 border-green-500 w-full rounded-xl"
              />
            </div>
            <div>
              <input
                type="text"
                name="photo_url"
                placeholder="Enter Your Photo Url"
                className="h-12 border p-4 border-green-500 w-full rounded-xl"
              />
            </div>
            <div className="relative">
              <input
                type={eyeOpen ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="h-12 border p-4 border-green-500 w-full rounded-xl"
              />
              {!eyeOpen ? (
                <div>
                  <BsFillEyeSlashFill
                    onClick={() => setEyeOpen(true)}
                    className="absolute top-2 right-2 text-3xl "
                  />
                </div>
              ) : (
                <BsFillEyeFill
                  onClick={() => setEyeOpen(false)}
                  className="absolute top-2 right-2 text-3xl "
                />
              )}
            </div>
            <div className="font-bold">
              <p>
                Already have account ?
                <span>
                  <Link to="/login">
                    <span className="border-b-2 border-blue-500">Login</span>
                  </Link>
                </span>
              </p>
            </div>
            <div className="text-center">
              <button className="p-2 border-2 rounded-xl border-green-500">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
