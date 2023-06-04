import { useState } from "react";
import Card from "./Card";
import { CardData } from "../CardData";

export default function CardContainer() {
  const [data, setData] = useState(CardData);
  return (
    <section className=" responsive">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <Card cardData={data[0]} />
        <Card cardData={data[1]} />
        <Card cardData={data[2]} />
        <Card cardData={data[3]} />
      </div>
    </section>
  );
}
