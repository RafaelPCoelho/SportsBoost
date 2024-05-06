import React from "react";

const sizes = {
  "2xl": "text-lg font-semibold",
  "5xl": "text-2xl font-bold md:text-[22px]",
  xl: "text-base font-bold",
  "7xl": "text-4xl font-extrabold md:text-[34px] sm:text-[32px]",
  "6xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  s: "text-[13px] font-semibold",
  md: "text-sm font-bold",
  "8xl": "text-[40px] font-extrabold md:text-[38px] sm:text-4xl",
  xs: "text-xs font-extrabold",
  lg: "text-[15px] font-semibold",
  "10xl": "text-[64px] font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-mulish ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
