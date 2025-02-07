import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className={feature.class1.join(" ")}>
      <div className={feature.classes.join(" ")}>
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={feature.image}
            alt=""
          />
        </div>

        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">{feature.title}</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            {feature.subtitle}
          </p>
          <button
            type="button"
            className="btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>

      <div
        className={`hidden
          lg:block
          overflow-hidden
          bg-bookmark-purple
          absolute
          h-80
          w-2/5
          -bottom-24
          ${feature.class2.join(" ")}
          `}
      ></div>
    </div>
  );
};

export default FeatureCard;
