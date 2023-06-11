import React from "react";

export default function FeaturesCard({ features }) {
  const { image, title, text } = features;
  return (
    <div className="flex flex-col items-center gap-[4.8rem] w-full  text-center">
      <img src={image} alt={title} className="w-[7.2rem]" />
      <div className="flex flex-col items-center gap-[1.6rem] xl:w-[35rem]">
        <h3 className="capitalize">{title}</h3>
        <p className="text-center ">{text}</p>
      </div>
    </div>
  );
}
