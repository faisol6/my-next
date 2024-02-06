import React from "react";

export const MainButton = (props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { children, className = "", onClick } = props;

  return (
    <button
      type="button"
      className={`text-[#ffffff] transition-all duration-500 font-[600] text-[1.125rem] px-[2.5vh] py-[0.5vh]
            bg-gradient-to-r to-[#6392E8] via-[#0E1364] from-[#6392E8] bg-size-200 bg-pos-0 hover:bg-pos-100 ${className}`}
      onClick={(e) => {
        onClick && onClick(e.stopPropagation());
      }}
      style={{ borderRadius: "60px" }}
    >
      {children}
    </button>
  );
};

export const DelButton = (props: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: (e: any) => void;
}) => {
  const { children, className = "", onClick } = props;

  return (
    <button
      type="button"
      className={`text-[#ffffff] transition-all duration-500 font-[600] text-[1.125rem] px-[2.5vh] py-[0.5vh]
            bg-gradient-to-r to-[#EF4444] via-[#991B1B] from-[#EF4444] bg-size-200 bg-pos-0 hover:bg-pos-100 ${className}`}
      onClick={(e) => {
        onClick && onClick(e.stopPropagation());
      }}
      style={{ borderRadius: "60px" }}
    >
      {children}
    </button>
  );
};
