import { Fragment } from "react";

//Component imports
import HeroFeaturesPricing from "../Components/HeroFeaturesPricing";
import ContainerFeatures from "../Components/ContainerFeatures";
import FeaturesCard from "../Components/Features";

//Data imports
import { data } from "../Data";
import { Feature, Featur } from "../FeaturesData";

export default function Features() {
  return (
    <Fragment>
      <HeroFeaturesPricing data={data[3]} />
      <ContainerFeatures Feature={Featur}/>
      <ContainerFeatures Feature={Feature}/>
    </Fragment>
  );
}
