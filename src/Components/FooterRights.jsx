import BtnArrow from "./BtnArrow";

export default function FooterRights() {
  return (
    <div className="h-full md:h-[12.2rem] md:relative w-[25.5rem] flex flex-col items-center gap-4 mt-5 md:flex-none md:mt-0">
      <BtnArrow
        name={"get an invite"}
        stroke={"hsdh"}
        spacing={"mr-[1.6rem]"}
      />
      <p className="text-gray-500 md:absolute bottom-0">
        Copyright 2023. All Rights reserved
      </p>
    </div>
  );
}
