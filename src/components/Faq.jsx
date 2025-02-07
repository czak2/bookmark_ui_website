import React from "react";
import Title from "./Title";
import { Faqss } from "./data";
import FaqCard from "./FaqCard";

function Faq() {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        <Title
          title="Frequently Asked Questions"
          subtitle="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
        ></Title>

        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          {Faqss.map((faq, i) => (
            <FaqCard key={i} faq={faq}></FaqCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
