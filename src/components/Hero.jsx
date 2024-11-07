import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800ppx]  w-full mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl ">
          Seven<span className="text-blue-400">Fitness</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Welcome to
        <span className="text-blue-400 font-medium">
          {" "}
          Seven Fitness{" "}
        </span> the{" "}
        <span className="text-blue-400 font-medium">
          ultimate fitness destination{" "}
        </span>
        designed to help you reach your goals. At Seven Fitness, we offer
        top-of-the-line cardio and strength equipment, versatile free weights,
        and functional training zones, all in a motivating environment.
      </p>
      <Button>Accept & Begin</Button>
    </div>
  );
};

export default Hero;
