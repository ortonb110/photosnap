import HeroStories from "../Components/HeroStories"
import CardContainerStories from "../Components/CardContainerStories";
import Footer from "../Components/Footer";
import { Fragment } from "react";

export default function Stories() {
  return (
    <Fragment>
      <HeroStories/>
      <CardContainerStories/>
      <Footer/>
    </Fragment>
  )
}
