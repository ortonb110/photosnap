import { useState } from "react";
import Card from "./Card";
import { CardData } from "../CardData";

export default function CardContainerStories() {
  const [data, setData] = useState(CardData);
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {
            data.map((data, index)=> {
                return <Card cardData={data} key={index}/>
            })
        }
      </div>
    </section>
  );
}
