export default function Card({ cardData }) {
  const { date, title, author, image } = cardData;
  const { desktop, mobile } = image;

  return (
    <div className=" w-full h-[37.5rem] md:h-[50rem] relative cursor-pointer col-span-1">
      <picture>
        <source media="(min-width: 1024px)" srcset={desktop} />
        <source media="(min-width: 768px)" srcset={desktop} />
        <img
          className=" h-full w-full object-cover"
          src={mobile}
          alt="Create and Share"
        />
      </picture>
      <div className="absolute bottom-4 px-[4rem] text-white py-[4rem] w-full md:w-[36rem]">
        <div className="border-b-[1px] ">
          <h3 className="capitalize">{title}</h3>
          <p className="text-[1.3rem]">
            <span>by</span> <span className="capitalize">{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
