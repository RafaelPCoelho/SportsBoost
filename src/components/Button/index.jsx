import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[15px]",
};
const variants = {
  fill: {
    indigo_A400_1c: "bg-indigo-A400_1c",
    light_blue_400_19: "bg-light_blue-400_19 text-light_blue-400",
    cyan_300: "bg-cyan-300 text-white-A700",
    blue_gray_50_01: "bg-blue_gray-50_01",
    light_blue_400: "bg-light_blue-400 text-white-A700",
  },
  outline: {
    indigo_900: "border-indigo-900 border border-solid text-indigo-900",
  },
};
const sizes = {
  xl: "h-[56px] px-[35px] text-base",
  lg: "h-[53px]",
  "4xl": "h-[78px] px-[35px] text-base",
  "3xl": "h-[68px] pl-[17px] pr-[35px] text-base",
  xs: "h-[29px] px-[11px] text-xs",
  sm: "h-[35px] px-1.5",
  "2xl": "h-[65px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xl", "lg", "4xl", "3xl", "xs", "sm", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_A400_1c",
    "light_blue_400_19",
    "cyan_300",
    "blue_gray_50_01",
    "light_blue_400",
    "indigo_900",
  ]),
};

export { Button };
