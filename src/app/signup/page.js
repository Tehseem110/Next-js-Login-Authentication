"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

export default function SignupPage() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  // navaigate on another page
  const router = useRouter()

  const onSubmit =async (data) => {
  
   try{
    const res = await axios.post("api/users/signup",data)
    console.log(res)
    // router.push("/login")
   }catch(error){
    console.log(error)
   }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Basic Input */}
      <label>Name</label>
      <Controller 
      name="name"
      control={control}
      defaultValue=""
      rules={{required:"name is required"}}
      render={({field}) =>  <input {...field} />}
      />

      

      {/* <input {...register("name", { required: "This field is required" })} /> */}
      {errors.name && <p>{errors.name.message}</p>}

      {/* Controlled Input using Controller */}
      <label>Email</label>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required", pattern: /^\S+@\S+$/i }}
        render={({ field }) => <input {...field} />}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>password</label>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "password is required"}}
        render={({ field }) => <input {...field} />}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
