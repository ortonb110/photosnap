import React from "react";

export default function ToggleBtn() {
  return (
    <button className="md:hidden flex flex-col gap-[4px]">
      <span className="w-[2rem] h-[2px] bg-black"></span>
      <span className="w-[2rem] h-[2px] bg-black"></span>
    </button>
  );
}
