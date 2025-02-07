import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 className="text-3xl text-center text-bookmark-blue">{title}</h1>
      <p className="text-center text-bookmark-grey mt-4">{subtitle}</p>
    </div>
  );
};

export default Title;
