import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const { loginUser, singInWithFacebook } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Login Success");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential");
        } else {
          toast.error("Login problem");
        }
      });
  };

  const handleFacebookLogin = () => {
    singInWithFacebook()
      .then((result) => {
        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
      });
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
            <button
              onClick={handleFacebookLogin}
              className="p-2  rounded-full bg-blue-700 border-green-500"
            >
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
            onSubmit={handleLogin}
            className="flex gap-4 flex-col w-1/3 mx-auto"
          >
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
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
                Don't have account ?
                <span>
                  <Link to="/register">
                    <span className="border-b-2 border-blue-500">
                      {" "}
                      Register
                    </span>
                  </Link>
                </span>
              </p>
            </div>
            <div className="text-center">
              <button className="p-2 border-2 rounded-xl border-green-500">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
