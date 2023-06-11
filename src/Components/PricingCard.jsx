import React from "react";

export default function PricingCard() {
  return (
    <div className={`bg-lightGray w-[31.8rem] h-[40.7rem] py-[4rem] px-[2.1rem] text-center`}>
      <h2 className="capitalize font-[700] text-[2.4rem] mb-[1.8rem]">Basic</h2>
      <p className="text-gray-500 mb-[4rem] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero odio
        nesciunt harum impedit magni rem recusandae qui animi excepturi.
      </p>
      <h3 className="font-extrabold text-[4rem] tracking-[4.17px] leading-[4.8rem]">
        <span>$</span>
        <span>19.00</span>
      </h3>
      <p>
        <span>per</span>
        <span>month</span>
      </p>
      <button className={`btn mt-[4rem] bg-black text-white w-full py-[1rem] text-[1.2rem] `}>
        pick plan
      </button>
    </div>
  );
}
