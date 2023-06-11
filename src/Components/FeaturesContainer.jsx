import React from 'react'
import FeaturesCard from './Features';

export default function FeaturesContainer({Feature}) {
  return (
    <section className=" grid md:grid-cols-2 lg:grid-cols-3 px-[3.3rem] py-[8rem]  md:px-[15.5rem] md:py-[12rem] lg:py-[13.2rem] lg:px-[5rem] items-center lg:gap-[3rem] md:gap-[8rem] gap-[5.6rem] ">
    {Feature.map((item, index) => {
      return <FeaturesCard features={item} key={index} />;
    })}
  </section>
  )
}
