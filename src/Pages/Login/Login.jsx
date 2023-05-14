import React, { useState } from "react";
import { FcUnlock, FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  // state show hide eye icon
  const [showPassword, setShowPassword] = useState(false);
  // state show hide eye icon
  // input value
  const [inputValue, setInputValue] = useState(null);
  // input value
  // form control
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  // form control
  // input control
  const handelInput = (e) => {
    setInputValue((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  // input control
  return (
    <div className="bg">
      <div className="lg:w-[1240px] lg:mx-auto md:w-full sm:w-full w-full lg:px-0 md:px-2 sm:px-3 px-3">
        <form
          onSubmit={handelSubmit}
          className="register h-screen flex justify-center items-center"
        >
          <div className="box bg-[#ebe9e9] p-10 rounded-md ">
            <h1 className=" text-4xl text-center font-semibold tracking-wide uppercase text-[#4e87b6] pb-5">
              Sign In
            </h1>

            {/* email filed */}
            <div className="input_filed relative">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none mt-3 text-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              {/* icons */}
              <MdEmail className=" absolute top-1/2 translate-y-[-25%] left-1 text-2xl" />
              {/* icons */}
            </div>
            {/* email filed */}
            {/* password filed */}
            <div className="input_filed relative">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none mt-3 text-lg"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              {/* icons */}
              <FcUnlock className=" absolute top-1/2 left-1 text-2xl translate-y-[-25%]" />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <AiFillEye className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                ) : (
                  <AiFillEyeInvisible className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                )}
              </div>
              {/* icons */}
            </div>
            {/* email filed */}
            {/* submit button */}
            <div className="button">
              <button className=" px-4 py-2 w-full rounded-md mt-5 font-semibold tracking-wide focus:bg-slate-400 bg-[#4e87b6] text-lg">
                Sign In
              </button>
            </div>
            {/* submit button */}

            {/* social media */}
            <div>
              <p className=" text-center capitalize pt-5 text-[#878080]">
                Or sign In with
              </p>
              {/* social Icons */}
              <div className="flex justify-center gap-10 mt-5 cursor-pointer">
                <FcGoogle className="text-2xl" />
                <FaFacebook className="text-2xl text-[#2f55ec]" />
                <AiFillGithub className="text-2xl" />
              </div>
              {/* social Icons */}
              {/* already have an account */}
              <p className="text-center text-sm pt-3">
                Don’t have an account?
                <Link
                  to="/register"
                  className="text-[#4350e1] text-base ml-2 underline font-semibold"
                >
                  Sign Up
                </Link>
              </p>
              {/* already have an account */}
            </div>
            {/* social media */}
          </div>
        </form>
      </div>
    </div>
  );
}
