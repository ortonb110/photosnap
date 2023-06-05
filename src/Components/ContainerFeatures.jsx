import FooterFeature from "./FooterFeature";
import { Features } from "../FeaturesData";

export default function ContainerFeatures() {
  return (
    <section className="responsive grid lg:grid-cols-3 px-[3.3rem] py-[8rem]  md:px-[15.5rem] md:py-[12rem] lg:py-[13.2rem] lg:px-[16.5rem] items-center lg:gap-[3rem] md:gap-[8rem] gap-[5.6rem]">
      {Features.map((item, index) => {
        return <FooterFeature features={item} key={index} />;
      })}
    </section>
  );
}
