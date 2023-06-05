import FooterFeature from "./FooterFeature"
import { Features } from "../FeaturesData"

export default function ContainerFeatures() {
  return (
    <section className='responsive grid lg:grid-cols-3 py-[13.2rem] px-[16.5rem] items-center lg:gap-[3rem]'>
        {
            Features.map((item, index)=> {
                return <FooterFeature features={item} key={index} />
            })
        }
    </section>
  )
}
