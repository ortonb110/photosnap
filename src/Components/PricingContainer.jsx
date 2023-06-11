import { useState } from "react";
import PricingCard from "./PricingCard";
import { Pricing } from "../PricingData";
import check from "../assets/pricing/desktop/check.svg";
import { compareData } from "../CompareData";

export default function PricingContainer() {
  const [duration, setDuration] = useState("month");

  const checkBoxHandler = (e) => {
    if (duration === "month") {
      setDuration("year");
    } else {
      setDuration("month");
    }
  };
  return (
    <section className="py-[6.4rem] lg:py-[12rem] px-[10%] md:px-[3.9rem] lg:px-0 xl:px-[16.5rem]">
      <div className="flex justify-center gap-[3.2rem] mb-[4rem] lg:mb-[4.8rem]">
        <h3
          className={`${duration === "month" ? "text-black" : "text-gray-400"}`}
        >
          Monthly
        </h3>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={checkBoxHandler}
          />
          <div className="w-[6rem] h-[3.2rem] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[2.4rem] after:w-[2.4rem] after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
        </label>

        <h3
          className={`${duration === "year" ? "text-black" : "text-gray-400"}`}
        >
          Yearly
        </h3>
      </div>
      <div className="flex gap-[2.4rem] lg:gap-[3rem] justify-center flex-col lg:flex-row items-center">
        {Pricing.map((item, index) => {
          return <PricingCard data={item} key={index} checked={duration} />;
        })}
      </div>
      <div className="flex justify-center flex-col items-center ">
        <h2 className="hidden md:block uppercase text-center text-[4rem] font-bold tracking-[4.17px] leading-[4.8rem] mt-[11.2rem]">
          compare
        </h2>
        <table className=" uppercase mt-[6.4rem] w-[31.8rem] md:w-[68.9rem] lg:w-[73.1rem] text-left">
          <thead className="border-b-2 border-black text-[0.8rem] md:text-[1.2rem] tracking-[2px] font-bold">
            <tr className="">
              <th className="px-[2.4rem] py-[2.3rem]">the features</th>
              <th className="px-[2.4rem] ">basic</th>
              <th className="px-[2.4rem] ">pro</th>
              <th className="px-[2.4rem] ">business</th>
            </tr>
          </thead>
          <tbody>
            {compareData.map((item, index) => {
              const { feature, basic, pro, business } = item;
              return (
                <tr
                  className="text-[0.8rem] md:text-[1.2rem] tracking-[2px] font-bold"
                  key={index}
                >
                  <td className=" px-[2.4rem] py-[2.3rem] border-b border-blue-gray-50">
                    {feature}
                  </td>
                  <td className=" pl-[3rem] border-b border-blue-gray-50">
                    {basic && <img src={check} alt={basic + ""} />}
                  </td>
                  <td className="pl-[3rem] border-b border-blue-gray-50">
                    {pro && <img src={check} alt={pro + ""} />}
                  </td>
                  <td className="pl-[5rem]  border-b border-blue-gray-50">
                    {business && <img src={check} alt={business + ""} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
