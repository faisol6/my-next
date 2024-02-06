import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 py-[2vh] bg-[#a3e635]">
      <div className="flex justify-start pl-[2vh]">Logo</div>
      <div className="flex justify-end pr-[2vh]">User</div>
    </div>
  );
};

export default Header;
