import React from "react";

const Button = (props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
}) => {
  const { children, className = '', onClick } = props;

  return (
    <button
      type="button"
      className={`text-[#E3E5F4] transition-all duration-500 font-[600] text-[1.125rem] px-[2.5vh] py-[0.5vh]
            bg-gradient-to-r to-[#6392E8] via-[#0E1364] from-[#6392E8] bg-size-200 bg-pos-0 hover:bg-pos-100 ${className}`}
      onClick={() => {
        onClick && onClick();
      }}
      style={{ borderRadius: "60px" }}
    >
      {children}
    </button>
  );
};

export default Button;
