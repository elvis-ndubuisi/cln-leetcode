"use client";

import React from "react";

type InputProps = {
  type?: "text" | "email";
  name: string;
  placeholder?: string;
  options?: {
    required: boolean;
    onChange: () => void;
  };
  xCss?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  name,
  options,
  xCss,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`block w-full rounded-sm px-3 py-2 font-light text-sm text-gray-8 outline-none border border-dark-gray-8 transition-all duration-700 ease-in-out hover:border-gray-8 focus-within:border-gray-8 focus-within:ring-2 focus-within:ring-dark-yellow focus-within:ring-opacity-40 ${xCss} placeholder:capitalize`}
      //   {...{ options }}
    />
  );
};
export default Input;
