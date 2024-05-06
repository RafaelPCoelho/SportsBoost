import React from "react";

const sizes = {
  "5xl": "text-2xl font-normal md:text-[22px]",
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  s: "text-[13px] font-medium",
  "2xl": "text-[17px] font-normal",
  "4xl": "text-[22px] font-normal",
  xl: "text-base font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_03 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
