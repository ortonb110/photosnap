import React, { Fragment, useState, } from "react";
import Hero from "../Components/Hero";
import HeroReversed from "../Components/Hero-Reversed";
import CardContainer from "../Components/CardContainer";
import ContainerFeatures from "../Components/ContainerFeatures";
import Footer from "../Components/Footer";
import { data } from "../Data";
import {Featur} from "../FeaturesData";

export default function Home() {
  const [dataList, setDataList] = useState(data);

  // useEffect(() => {
  //   alert("Warning, Site undergoing construction!");
  // }, []);
  return (
    <Fragment>
      <Hero data={dataList[0]} />
      <HeroReversed data={dataList[1]} />
      <Hero data={dataList[2]} />
      <CardContainer/>
      <ContainerFeatures Feature={Featur}/>
      <Footer/>
    </Fragment>
  );
}
