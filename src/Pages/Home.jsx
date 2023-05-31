import React, { Fragment, useState } from "react";
import Hero from "../Components/Hero";
import HeroReversed from "../Components/Hero-Reversed";
import {data} from '../Data';

export default function Home() {
  const [dataList, setDataList] = useState(data)
  return (
    <Fragment>
      <Hero data={dataList[0]}/>
      <HeroReversed  data={dataList[1]}/>
      <Hero data={dataList[2]}/>
    </Fragment>
  );
}
