import bgHeroMobile from "../assets/stories/mobile/moon-of-appalacia.jpg";
import BtnArrow from "./BtnArrow";

export default function HeroStories() {
  return (
    <div
      className={` md:overflow-hidden md:relative backgroundImage md:h-[65rem] text-white cursor-pointer md:py-[12.2rem] lg:px-[12.2rem] md:px-[3.9rem] `}
    >
      <img
        src={bgHeroMobile}
        alt="Moon of Appalachia"
        className="md:hidden w-full h-[31.7rem] object-fit"
      />
      <div className=" px-[2.9rem] py-[4.8rem] md:px-0 md:py-0 bg-black md:bg-inherit md:w-[38.7rem] lg:hover:hoverStoryEffect lg:absolute md:z-10">
        <h4 className="uppercase font-semibold mb-[2.4rem]">
          last month's featured story
        </h4>
        <h1 className="uppercase text-[3.2rem] md:text-inherit font-semibold mb-[1.6rem]">
          hazy full moon of appalachia
        </h1>
        <p className="text-gray-400 mb-[2.4rem]">
          <span className="capitalize">march 2nd 2020</span> by{" "}
          <span className="text-white capitalize">john appleseed</span>
        </p>
        <p className="text-gray-400 mb-[2.4rem]">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <BtnArrow name={"read the story"} stroke={""} spacing={"mr-[1.6rem]"} />
      </div>
    </div>
  );
}
