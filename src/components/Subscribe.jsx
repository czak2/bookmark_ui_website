import React from "react";

function Subscribe() {
  return (
    <section>
      <div className="bg-bookmark-purple py-14">
        <div className="flex flex-col items-center justify-center pt-12 px-10 gap-8 container">
          <h3 className="text-white">35,000+ ALREADY JOINED</h3>
          <h2 className="text-white text-4xl text-center font-medium">
            Stay up-to-date with what we’re doing
          </h2>
          <div className="flex flex-col justify-center items-center gap-4 w-full max-w-md sm:flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-3 px-1 rounded-md w-full border-none leading-normal focus:outline-none placeholder:text-bookmark-grey"
            />
            <button
              type="button"
              className="btn bg-bookmark-red text-white hover:bg-bookmark-white hover:text-black min-w-full mb-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
