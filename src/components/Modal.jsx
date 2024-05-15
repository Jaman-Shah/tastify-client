import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = ({ loadGallery }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  console.log(navigate.sta);
  const handleModalOpen = () => {
    if (user) {
      setIsOpen(true);
    } else {
      navigate("/login", { state: location.pathname });
    }
  };

  const handleCreateGallery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const feedback = form.feedback.value;
    const image = form.image.value;
    const data = { name, email, feedback, image };
    try {
      const response = await axios.post(
        "https://tastify-server-ten.vercel.app/gallery",
        data
      );
      if (response.data.acknowledged) {
        toast.success("Feedback Submitted");
        loadGallery();
        form.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="border p-4 mb-6 bg-blue-500 rounded-xl"
          onClick={handleModalOpen}
        >
          Add
        </button>
      </div>
      <div className={`relative flex justify-center ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-0 z-10 overflow-y-auto ${
            isOpen ? "" : "hidden"
          }`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <h3
                className="text-lg font-medium leading-6 text-gray-800 capitalize "
                id="modal-title"
              >
                Add A Image And feedback
              </h3>

              <form onSubmit={handleCreateGallery} className="mt-4" action="#">
                <label htmlFor="name" className=" ">
                  Name :
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  id="name"
                  className="block w-full px-4 py-3 text-sm  bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600   dark:focus:border-blue-300"
                  disabled
                />

                <label htmlFor=""> Feedback</label>
                <textarea
                  type="text"
                  name="feedback"
                  id="feedback"
                  placeholder="Enter FeedBack"
                  className="block w-full px-4 py-3 text-sm  bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600   dark:focus:border-blue-300"
                  required
                />

                <label htmlFor="">Image Url</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Enter Image URL"
                  className="block w-full px-4 py-3 text-sm  bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600   dark:focus:border-blue-300"
                  required
                />

                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2   hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
