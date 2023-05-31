import React, { Fragment } from "react";
import Hero from "../Components/Hero";
import HeroReversed from "../Components/Hero-Reversed";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <HeroReversed />
    </Fragment>
  );
}
