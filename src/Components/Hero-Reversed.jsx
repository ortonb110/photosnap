import React from "react";
import BtnArrow from "./BtnArrow";


export default function HeroReversed() {
  return (
    <section className=" grid h-[65rem] grid-reversed">
      <div className="">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset={require("../assets/home/desktop/create-and-share.jpg")}
          />
          <source
            media="(min-width: 768px)"
            srcset={require("../assets/home/tablet/create-and-share.jpg")}
          />
          <img
            className=" w-full object-cover h-[65rem]"
            src={require("../assets/home/mobile/create-and-share.jpg")}
            alt="Create and Share       "
          />
        </picture>
      </div>
      <div className="w-full bg-black text-white flex justify-center items-center ">
        <div className="h-[30.4rem] px-[11.2rem] hero_pad">
          <h1 className="uppercase font-[600] mb-[2rem]">
            create and share your photo stories.
          </h1>
          <p className="mb-[4rem] text-gray-400">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <BtnArrow />
        </div>
      </div>
    </section>
  );
}
