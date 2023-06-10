import { Fragment } from "react"


//Component imports
import HeroFeaturesPricing from "../Components/HeroFeaturesPricing";

//Data imports
import {data} from '../Data';

export default function Features() {
  return (
    <Fragment>
      <HeroFeaturesPricing data={data[3]} />
    </Fragment>
  )
}
