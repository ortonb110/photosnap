import FooterLinks from "./FooterLinks";
import FooterRights from "./FooterRights";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full md:px-[17.1rem] py-[6.4rem] flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between h-full">
      <FooterLinks />
      <FooterRights/>
    </footer>
  );
}
