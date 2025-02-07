import React from "react";
import Title from "./Title";
import DownloadCard from "./DownloadCard";
import { download } from "./data";

function Download() {
  return (
    <section className="py-20 mt-20">
      <Title
        title="Download the extension"
        subtitle="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      ></Title>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        {download.map((item, i) => (
          <DownloadCard download={item} key={i}></DownloadCard>
        ))}
      </div>
    </section>
  );
}

export default Download;
