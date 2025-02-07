import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function FaqCard({ faq }) {
  const [isActive, setIsActive] = useState(false);
  const handleOnclick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="border-b py-4">
      <div className="flex items-center" onClick={handleOnclick}>
        <span className="flex-1 font-bold">{faq.title}</span>
        <div>
          {isActive ? (
            <FaAngleUp className="text-bookmark-purple cursor-pointer"></FaAngleUp>
          ) : (
            <FaAngleDown className="text-bookmark-purple cursor-pointer"></FaAngleDown>
          )}
        </div>
      </div>
      <div>
        {isActive && (
          <div className="flex justify-start items-start">
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div> // Display answer if `isOpen` is true
        )}
      </div>
    </div>
  );
}

export default FaqCard;
