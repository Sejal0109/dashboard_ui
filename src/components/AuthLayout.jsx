// AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children, imageSrc }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto bg-white rounded-lg shadow-lg overflow-hidden w-3/4 max-w-4xl">
        <div className="flex">
          {/* Left Section: Image */}
          <div className="w-1/2 hidden md:block">
            <img
              src={imageSrc}
              alt="People collaborating"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right Section: Form Content */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex items-center mb-8">
              {/* Logo/Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-blue-500 mr-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">SkillSync</h2>
            </div>

            {/* Form Section */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
