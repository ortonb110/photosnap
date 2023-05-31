import React from "react";
import arrow from "../assets/shared/desktop/arrow.svg";
export default function BtnArrow() {
  return (
    <button className="uppercase btn flex gap-[1.8rem] items-center">
      <span>get an invite</span>
      <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fill-rule="evenodd" stroke="#fff">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </span>
    </button>
  );
}
