import { NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-white.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-[3.2rem] md:gap-0 md:flex-none  md:grid md:grid-rows-3 md:grid-flow-col w-[35.1rem] items-center relative h-full md:h-[12.2rem]">
      <NavLink to={"/"} className={`order-1 lg:col-span-2 md:order-none`}>
        {" "}
        <img src={logo} alt="Photosnap Logo" className="w-[17rem]" />{" "}
      </NavLink>
      <div className="flex flex-col items-center gap-[1.9rem] md:flex-none md:items-start order-last md:order-none md:mt-[0.5rem] lg:mt-3 md:gap-[0.5rem] md:flex-col row-span-3 text-[1.2rem] uppercase lg:gap-2 font-bold tracking-[2px]">
        <NavLink
          to={"/"}
          className={`hover:opacity-20 transition-all ease-in-out duration-150`}
        >
          Home
        </NavLink>
        <NavLink
          to={"stories"}
          className={`hover:opacity-20 transition-all ease-in-out duration-150`}
        >
          Stories
        </NavLink>
        <NavLink
          to={"features"}
          className={`hover:opacity-20 transition-all ease-in-out duration-150`}
        >
          features
        </NavLink>
        <NavLink
          to={"pricing"}
          className={`hover:opacity-20 transition-all ease-in-out duration-150`}
        >
          pricing
        </NavLink>
      </div>
      <div className="md:col-span-end md:absolute bottom-0 order-2 md:order-none">
        <ul className="flex gap-[1.3rem]">
          <li>
            <a href="#">
              <img src={facebook} alt="" className="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinterest} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
