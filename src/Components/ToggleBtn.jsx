import React from "react";

export default function ToggleBtn({toggleBtnHandler, open}) {
  return (
    <button className="md:hidden flex flex-col gap-[4px]" onClick={toggleBtnHandler}>
      <span className={`w-[2rem] h-[2px] bg-black transition-all ease-in-out duration-200 ${open? 'translate-x-2': "rotate-0"}`}></span>
      <span className={`w-[2rem] h-[2px] bg-black transition-all ease-in-out duration-200 ${open? '-translate-x-2': "rotate-0"}`}></span>
    </button>
  );
}
