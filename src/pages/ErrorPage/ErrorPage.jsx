import React from "react";

const ErrorPage = () => {
  return (
    <div className={`bg-white-200 flex justify-center items-center h-screen`}>
      <div className="w-full h-full overflow-hidden">
        <img
          src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif"
          alt="404 Error"
          className="object-contain w-auto h-auto mx-auto max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
