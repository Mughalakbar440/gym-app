import React from "react";

const SectionWrapper = ({ children, header, title }) => {
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]} <span className="uppercase text-blue-400">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="w-full p-4 flex flex-col max-w-[800px] mx-auto gap-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
