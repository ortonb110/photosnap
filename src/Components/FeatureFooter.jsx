import React from "react";
import BtnArrow from "./BtnArrow";

export default function FeatureFooter() {
  return (
    <section className="betaBackgroundImage h-[28.8rem] md:h-[28rem] text-white py-[6.4rem] px-[3.2rem] md:py-[6.8rem] md:px[3.9rem] lg:px-[16.5rem] flex flex-col gap-[2.4rem] md:flex-row md:justify-between md:items-center">
      <h2 className="uppercase tracking-[3.33px] md:tracking-[4.17px] text-[3.2rem] md:text-[4rem] leading-[40px] md:leading-[48px] font-[600] w-[40rem]">
        we're in beta. get your invite today
      </h2>
      <BtnArrow name={"get an invite"} stroke={""} spacing={"mr-[1.6rem]"} />
    </section>
  );
}
