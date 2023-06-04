

export default function Card({cardData}) {
    const {date, title, author, image} = cardData;
    const {desktop, mobile} = image;
    
  return (
    <div className=" w-full md:w-[36rem] h-[37.5rem] md:h-[50rem] relative cursor-pointer col-span-1">
         <picture>
          <source
            media="(min-width: 1024px)"
            srcset={desktop}
          />
          <source
            media="(min-width: 768px)"
            srcset={desktop}
          />
          <img
            className=" object-fit"
            src={mobile}
            alt="Create and Share"
          />
        </picture>
       
    </div>
  )
}
