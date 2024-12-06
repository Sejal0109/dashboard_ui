// SignUp.jsx
import React from "react";
import AuthLayout from "./AuthLayout";
import Signupimage from "../assets/signup-image.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout imageSrc={Signupimage}>
      <h1 className="text-3xl font-bold mb-4">
        New to SkillSync? Create your Account
      </h1>
      <p className="mb-6">
        Already have an account?{" "}
        <button onClick={function (){
          navigate("/signin")
        }} className="text-blue-500 font-medium">
          Sign In
        </button>
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          onClick={function (){
            navigate("/dashboard")
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
