"use client"; // 👈 use it here
import { onLogin } from "@/services/content_api";
import React, { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({ username: "faisol6", password: "12345678" });

  const handleSignon = async () => {
    console.log("handleSignon", userInfo);
    // localStorage.setItem("loginByHeader", "/");
    try {
      const res = await onLogin(userInfo);
      if (res?.message === "Invalid username or password") {
      } else {
        localStorage.setItem("myuser", JSON.stringify(userInfo) || "");
        localStorage.setItem("mytoken", res?.token || "");
        window.location.replace(`/`);
      }
      console.log("onLogin", res);
    } catch (error) {
      console.log("error api", error);
    }
  };

  return (
    <div className="grid justify-items-center h-[100vh]">
      <div className="self-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 
              mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignon}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
