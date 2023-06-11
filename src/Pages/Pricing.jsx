import {Fragment} from 'react'


//Components imports
import HeroFeaturesPricing from '../Components/HeroFeaturesPricing'
import FeatureFooter from '../Components/FeatureFooter'
import Footer from '../Components/Footer'
import PricingContainer from '../Components/PricingContainer'
//Data import
import { data } from '../Data'

export default function Pricing() {
  return (
    <Fragment>
      <HeroFeaturesPricing data={data[4]} />
      <PricingContainer/>
      <FeatureFooter/>
      <Footer/>
    </Fragment>

  )
}
