import React from "react";


export default function FeaturesCard({ features }) {
  const { image, title, text } = features;
  return (
    <div className="col-span-1 flex flex-col items-center gap-[4.8rem] w-full lg:w-[35rem]">
      <img src={image} alt={title} className="w-[7.2rem]" />
      <div className="flex flex-col items-center gap-[1.6rem]">
        <h3 className="capitalize">{title}</h3>
        <p className="text-center ">{text}</p>
      </div>
    </div>
  );
}
