import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const { loginUser, signInWithGithub } = useContext(AuthContext);

  // importing navigate function
  const navigate = useNavigate();

  // importing location function
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success("Login Success");
        axios
          .post(
            "https://tastify-server-ten.vercel.app/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.success) {
              navigate(location.state || "/");
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential");
        } else {
          toast.error("Login problem");
        }
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        toast.success("Login Success");
        if (result.user) {
          const email = result.user.email;
          axios.get(
            "https://tastify-server-ten.vercel.app/jwt",
            {
              email,
            },
            { withCredentials: true }
          );
          navigate(location.state || "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative max-w-screen-lg mx-4 md:mx-auto my-10 bg-green-300 p-4 rounded-3xl">
        <div className="relative  md:absolute h-[130px] mb-2 md:h-[200px] top-0 left-[100px] rounded-b-lg  shadow-2xl w-[150px] bg-gray-500">
          <div className="flex justify-around">
            <div className="h-10 md:h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
            <div className="h-10 md:h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
            <div className="h-10 md:h-[100px] w-[20px] bg-red-300 rounded-b-3xl"></div>
          </div>
          <h1 className="font-bold text-white text-2xl mt-4 text-center">
            Login With
          </h1>
          <div className="text-center">
            <button
              onClick={handleGithubLogin}
              className="p-2  rounded-full bg-green-500 border-green-500"
            >
              <VscGithub className="text-2xl" />
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
            className="flex gap-4 flex-col w-full md:w-1/3 mx-auto"
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
