import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white "
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 dark:border-white p-1 pr-4 rounded-4xl">
        <img src={assets.group_profile} alt="" className="w-10" />
        <p className="text-sm font-bold">Trusted by 10K+ people</p>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Transform Your Business with Our{" "}
        <span className="bg-gradient-to-r from-[#184C9A] to-[#007BFF] bg-clip-text text-transparent">
          POS
        </span>{" "}
        System
      </h1>
      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Streamline your operations and boost sales with our cutting-edge
        point-of-sale solution.
      </p>
      <div className="relative">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 "
        />
      </div>
    </div>
  );
};

export default Hero;
