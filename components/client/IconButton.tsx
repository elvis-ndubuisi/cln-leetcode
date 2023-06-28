"use client";

import React from "react";

type IconButtonProps = {
  handleClick?: () => {};
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({ handleClick, children }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-dark-layer-1 p-2 rounded-md"
    >
      {children}
    </button>
  );
};
export default IconButton;
