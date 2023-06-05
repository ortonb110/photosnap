import React from "react";
import logo from "../assets/features/desktop/responsive.svg";

export default function FooterFeature({ features }) {
  const { image, title, text } = features;
  return (
    <div className="col-span-1 flex flex-col items-center gap-[4.8rem] w-[35rem]">
      <img src={image} alt={title} className="w-[7.2rem]" />
      <div className="flex flex-col items-center gap-[1.6rem]">
        <h3>{title}</h3>
        <p className="text-center ">{text}</p>
      </div>
    </div>
  );
}
