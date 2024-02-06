"use client"; // 👈 use it here
import { handleLogout } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  return (
    <div className="grid grid-cols-2 py-[2vh] bg-[#a3e635]">
      <div className="flex justify-start pl-[2vh]  text-[black] font-bold text-[1.8vh]">
        Logo
      </div>
      <div className="flex justify-end pr-[2vh] text-[black] font-bold text-[1.8vh] cursor-pointer hover:text-[white] transition-all"
      onClick={()=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You want to signout!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result: { isConfirmed: any; }) => {
          if (result.isConfirmed) {
            handleLogout();
          }
        })
      }}>
        {userInfo?.username || ""}
      </div>
    </div>
  );
};

export default Header;
