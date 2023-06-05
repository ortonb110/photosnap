import { NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-white.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import instagram from "../assets/shared/desktop/instagram.svg";

export default function FooterLinks() {
  return (
    <div className="grid grid-rows-3 grid-flow-col w-[35.1rem] items-center relative h-[12.2rem]">
      <NavLink to={"/"} className={`col-span-2`}>
        {" "}
        <img src={logo} alt="Photosnap Logo" className="w-[17rem]" />{" "}
      </NavLink>
      <div className="flex flex-col row-span-3 uppercase gap-2 font-bold tracking-[2px]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"stories"}>Stories</NavLink>
        <NavLink to={"features"}>features</NavLink>
        <NavLink to={"pricing"}>pricing</NavLink>
      </div>
      <div className="col-span-end absolute bottom-0">
        <ul className="flex gap-[1.3rem]">
          <li>
            <a href="#">
              <img src={facebook} alt="" />
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
