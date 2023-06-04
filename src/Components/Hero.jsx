import React from "react";

//Component
import BtnArrow from "./BtnArrow";

export default function Hero({ data }) {
  const { header, details, image, design } = data;
  const { desktop, mobile, tablet } = image;
  return (
    <section
      className={`responsive grid h-[71.3rem] ${
        design === "reverse" ? "md:h-[60rem]" : "md:h-[65rem]"
      }  md:grid-normal `}
    >
      <div
        className={` w-full lg:w-[61rem] ${
          design === "reverse" ? "bg-white text-black" : "bg-black text-white"
        } flex justify-center items-center order-last md:order-none h-[41.9rem] md:h-full`}
      >
        <div
          className={`md:h-[30.4rem] ${
            design === "reverse" ? "" : "md:hero-border"
          } px-[3rem] py-[7.2rem] md:py-0 md:px-[5.4rem] lg:px-[11.2rem] hero_pad`}
        >
          <h1 className="uppercase font-[600] mb-[2rem] text-[3.2rem] md:text-[4rem]">
            {header}
          </h1>
          <p className="mb-[4rem] text-gray-400">{details}</p>
          <BtnArrow stroke={design} />
        </div>
      </div>
      <div className="h-[29.4rem] lg:w-[83rem]">
        <picture>
          <source media="(min-width: 1024px)" srcset={desktop} />
          <source media="(min-width: 768px)" srcset={tablet} />
          <img
            className={`w-full object-cover lg:w-[83rem] h-[29.4rem] ${
              design === "reverse" ? "md:h-[60rem]" : "md:h-[65rem]"
            }`}
            src={mobile}
            alt={header}
          />
        </picture>
      </div>
    </section>
  );
}
