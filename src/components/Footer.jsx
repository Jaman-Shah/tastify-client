import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black p-16">
      <div className="flex justify-between items-center">
        <div className="font-bold flex flex-col gap-4">
          <h1 className="font-bold text-3xl">Testify</h1>
          <p>
            <input
              placeholder="Search here...."
              type="text"
              className="h-10 rounded-lg p-2"
            />
          </p>
          <p>&copy; testify food company</p>
        </div>
        <div className="border-l-2 pl-4 font-bold border-black">
          <div className="flex flex-col gap-4">
            <p className="border-b-2 border-orange-500">Contact :</p>
            <p>tastify@gmail.com</p>
            <p>Tel: +003300 </p>
          </div>
        </div>
        <div className="border-l-2 pl-4 border-black">
          <div className="flex flex-col gap-4 px-4">
            <p className="p-2 border border-green-400 bg-green-400 ">
              <ImFacebook2 className="text-orange-500 text-2xl" />
            </p>
            <p className="p-2 border border-green-400 bg-green-400 ">
              <FaSquareTwitter className="text-orange-500 text-2xl" />
            </p>
            <p className="p-2 border border-green-400 bg-green-400 ">
              <FaInstagram className="text-orange-500 text-2xl" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
