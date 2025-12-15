"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  py-2">
      <div className=" flex flex-col justify-center items-center py-2 rounded-2xl p-10 bg-transparent opacity-100 space-y-4 shadow-amber-600  shadow-2xl ">
        <h1 className="text-2xl text-amber-500 font-bold text-center align-middle m-2.5 p-2">
          Signup
        </h1>
        <hr />

        <input
          className="p-2 text-black focus:ring-2 focus:ring-amber-700 bg-amber-200 rounded-2xl w-70"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter Username"
        />
        <input
          className="p-2 text-black border-none  bg-amber-200 rounded-2xl w-70 mt-4"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email"
        />
        <input
          className="p-2 text-black border-none  bg-amber-200 rounded-2xl w-70 mt-4"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter Password"
        />
        <button
          className="p-2 bg-amber-500 text-white rounded-lg mt-4 w-70"
          onClick={onSignup}
        >
          Signup here
        </button>
        <Link
          href="/login"
          className="text-blue-600 hover:text-blue-800 hover:underline "
        >
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
}
