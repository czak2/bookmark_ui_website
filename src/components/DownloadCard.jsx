import React from "react";

function DownloadCard({ download }) {
  return (
    <div className={download.classes.join(" ")}>
      <div className="p-6 flex flex-col items-center">
        <img src={download.image} alt="" />

        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
          {download.title}
        </h3>
        <p className="mb-2 text-bookmark-grey font-light">
          {download.subtitle}
        </p>
      </div>
      <hr className="border-b border-bookmark-white" />
      <div className="flex p-6">
        <button
          type="button"
          className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
        >
          Add & Install Extension
        </button>
      </div>
    </div>
  );
}

export default DownloadCard;
