import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    light_blue_50: "bg-light_blue-50 text-light_blue-900",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    yellow_700: "bg-yellow-700 text-white-A700",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
  },
  outline: {
    indigo_400: "border-indigo-400 border border-solid text-indigo-400",
  },
};
const sizes = {
  sm: "h-[54px] pl-4 pr-[35px] text-sm",
  xs: "h-[48px] px-6 text-base",
  md: "h-[68px] pl-6 pr-[35px] text-base",
  xl: "h-[75px] pl-5 pr-[35px] text-base",
  lg: "h-[72px] px-[22px] text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "lg",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </label>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs", "md", "xl", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_blue_50", "deep_purple_A200", "yellow_700", "deep_orange_300", "indigo_400"]),
};

export { Input };
