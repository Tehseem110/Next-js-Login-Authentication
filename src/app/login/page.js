"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  return (
    <div className="bg-purple-100 w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="w-full  h-screen object-cover relative">
        <img src="https://ik.imagekit.io/exbyhpjtw/Common/login1.svg?updatedAt=1702969948164"/>
        <div className="absolute top-10 right-28  w-[30%]  bg-purple-900 rounded-2xl">
          <div className="text-center mt-7 text-[2em] font-extrabold text-white h-[10%]">
            <h3>LOGIN</h3>
          </div>
          <form className="flex flex-col justify-center items-center h-[53%] ">
            <div className="flex flex-col w-[60%]">
              <label className="text-[1.5em] font-bold text-white">Email</label>
              <input
                className=" rounded-md shadow-md p-[1em] mt-3"
                placeholder="Enter Your Email"
              ></input>
            </div>
            <div className="flex flex-col w-[60%]">
              <label className="text-[1.5em] font-bold text-white mt-3">
                Password
              </label>
              <input
                className=" rounded-md shadow-md p-[1em] mt-3"
                placeholder="Enter Your Password"
              ></input>
            </div>
            <div className="flex justify-end w-[60%] mt-2 text-white">
              <h4>Forgot Pasword?</h4>
            </div>
            <div className="w-[60%] flex justify-center bg-white mt-3 rounded-md shadow-md p-[1em] cursor-pointer text-purple-900 font-extrabold text-10">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="h-[42%]">
            <img src="https://ik.imagekit.io/exbyhpjtw/Common/Group%2092NEW.svg?updatedAt=1702980092645"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
