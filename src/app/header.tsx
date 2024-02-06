"use client"; // 👈 use it here
import React, { useEffect, useState } from "react";

const Header = () => {
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const res: any = localStorage.getItem("myuser");
      setUserInfo(JSON.parse(res));
    }
  }, []);
  console.log("userInfo", userInfo);

  return (
    <div className="grid grid-cols-2 py-[2vh] bg-[#a3e635]">
      <div className="flex justify-start pl-[2vh]  text-[black] font-bold text-[1.8vh]">
        Logo
      </div>
      <div className="flex justify-end pr-[2vh] text-[black] font-bold text-[1.8vh]">
        {userInfo?.username || ""}
      </div>
    </div>
  );
};

export default Header;
