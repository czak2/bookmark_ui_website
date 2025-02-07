import React from "react";

function Button({
  title,
  bgColor = "bg-customBlue",
  textColor = "text-white",
  hoverTextColor = "hover:text-black",
  hoverBgColor = "hover:bg-white",
}) {
  return (
    <button
      className={`px-6 py-3 rounded-md ${bgColor} ${textColor} ${hoverTextColor} ${hoverBgColor} transition-all duration-300 leading-normal font-medium`}
    >
      {title}
    </button>
  );
}

export default Button;
