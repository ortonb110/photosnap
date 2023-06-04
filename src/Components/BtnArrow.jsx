import React from "react";

export default function BtnArrow({ name, stroke, spacing }) {
  return (
    <button
      className={`uppercase ${spacing} btn flex gap-[1.8rem] items-center hover:underline underline-offset-2`}
    >
      <span>{name}</span>
      <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke={`${stroke === "reverse" ? "#000" : "#fff"}`}
          >
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </span>
    </button>
  );
}
