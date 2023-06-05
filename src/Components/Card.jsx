import BtnArrow from "./BtnArrow";

export default function Card({ cardData }) {
  const { title, author, image } = cardData;
  const { desktop, mobile } = image;

  return (
    <div className="  w-full h-[37.5rem] md:h-[50rem] relative cursor-pointer col-span-1 hover:-translate-y-[2.4rem] transition-all ease-in-out duration-150 hover:border-b-4 border-red-500 transform-gpu">
      <picture className="">
        <source media="(min-width: 1024px)" srcset={desktop} />
        <source media="(min-width: 768px)" srcset={desktop} />
        <img
          className=" h-full w-full object-cover"
          src={mobile}
          alt="Create and Share"
        />
      </picture>
      <div className="absolute right-0 bottom-[0.1rem] px-[4rem] text-white py-[4rem] w-full md:w-[36rem] bg-black bg-opacity-20 ">
        <div className="border-b-[1px] mb-[2rem]">
          <h3 className="capitalize">{title}</h3>
          <p className="text-[1.3rem]">
            <span>by</span> <span className="capitalize">{author}</span>
          </p>
        </div>
        <BtnArrow
          stroke={"original"}
          name={"read story"}
          spacing={"justify-between w-full"}
        />
      </div>
    </div>
  );
}
