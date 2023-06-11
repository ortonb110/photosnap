import React, { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./assets/shared/desktop/logo.svg";

// Components Imports
import ToggleBtn from "./Components/ToggleBtn";

export default function RootLayout() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };
  

  return (
    <Fragment>
      <header className=" px-[2.4rem] md:px-[3.9rem] lg:px-[16.5rem] py-[1.6rem] sticky top-0 md:static bg-white">
        <nav className="flex justify-between items-center">
          <NavLink to={"/"} className={`z-50`}>
            <img src={logo} alt="Photosnap Logo" className="w-[17rem] " />
          </NavLink>
          <div className={`flex md:justify-between md:w-[26.9rem] absolute md:static justify-center w-full items-center md:flex-row flex-col bg-white left-0 py-[2rem] gap-[1.3rem] md:gap-0 md:py-0 transition-all ease-in-out duration-200 ${open? 'top-[4.5rem]': 'top-[-50rem]'}`}>
            <NavLink className={`nav-items`} to={"stories"}>
              stories
            </NavLink>
            <NavLink className={`nav-items`} to={"features"}>
              features
            </NavLink>
            <NavLink className={`nav-items`} to={"pricing"}>
              pricing
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/"}
              className={`btn bg-black text-white btn_default hidden md:flex `}
            >
              get an invite
            </NavLink>
            <ToggleBtn toggleBtnHandler={openMenu} open={open} />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}
