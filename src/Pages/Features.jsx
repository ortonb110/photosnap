import { Fragment } from "react";

//Component imports
import HeroFeaturesPricing from "../Components/HeroFeaturesPricing";
import FeaturesContainer from "../Components/FeaturesContainer";
import Footer from "../Components/Footer";
import FeatureFooter from "../Components/FeatureFooter";

//Data imports
import { data } from "../Data";
import { Feature } from "../FeaturesData";

export default function Features() {
  return (
    <Fragment>
      <HeroFeaturesPricing data={data[3]} />
      <FeaturesContainer Feature={Feature}/>
      <FeatureFooter/>
      <Footer/>
    </Fragment>
  );
}
