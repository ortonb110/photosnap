import React from "react";

export default function PricingCard({ data, checked }) {
  const { type, description, price, duration } = data;
  const { basic, pro } = duration;
  return (
    <div
      className={`${
        type === "pro"
          ? "bg-black text-white border-l-[6px] border-color lg:border-l-0 lg:border-t-[6px] lg:border-color-top lg:h-[47rem]"
          : "bg-lightGray text-black h-[40.7rem] lg:h-[40.7rem]"
      } w-full lg:w-[31.8rem]  py-[4rem] px-[2.1rem] text-center md:grid grid-cols-2 lg:grid-cols-none md:h-[27rem]`}
    >
      <div>
        <h2 className="capitalize font-[700] text-[2.4rem] mb-[1.8rem]">
          {type}
        </h2>
        <p className="text-gray-500 mb-[4rem] md:mb-0 lg:mb-inherit">{description}</p>
      </div>
      <div>
        <h3 className="font-extrabold text-[4rem] tracking-[4.17px] leading-[4.8rem] md:text-right lg:text-center">
          <span>$</span>
          <span>
            {
                checked === 'year' ?  `${(price * 10) +".00"}`:`${price+".00"}`        
            }
        </span>
        </h3>
        <p className="md:text-right lg:text-center">
          <span>{'per '}</span>
          <span>{basic}</span>
        </p>
      </div>
      <button
        className={`btn ${
          type === "pro"
            ? "bg-white text-black hover:bg-black hover:text-white"
            : "bg-black text-white hover:bg-gray-400 hover:text-black"
        } transition-all ease-in-out duration-200 mt-[4rem] md:mt-[3.2rem] lg:mt-0 w-full  text-[1.2rem]  h-[4rem]`}
      >
        pick plan
      </button>
    </div>
  );
}
