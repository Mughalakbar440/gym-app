import React from "react";

const Button = ({ children, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 py-4 rounded-md border-[2px] border-blue-400 duration-200 border-solid bg-slate-950 blueShadow mx-auto"
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
