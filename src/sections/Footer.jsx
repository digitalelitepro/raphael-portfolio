import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center font-mono font-semibold text-center md:text-xl">
      <div className="min-h-[100px] flex justify-center gap-2 md:gap-6 text-center text-lg text-gray-300 font-mono mb-5">
        <div className="flex justify-center gap-10 p-9 text-white">
          <a
            href="https://x.com/rsenghor"
            target="_new"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
          >
            <FaXTwitter />
          </a>
        </div>
        <div className="flex justify-center gap-10 p-9 text-white">
          <a
            href="https://x.com/rsenghor"
            target="_new"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
          >
            <SlSocialLinkedin />
          </a>
        </div>
        <div className="flex justify-center gap-10 p-9 text-white">
          <a
            href="https://x.com/rsenghor"
            target="_new"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
          >
            <SlSocialInstagram />
          </a>
        </div>
        <div className="flex justify-center gap-10 p-9 text-white">
          <a
            href="https://x.com/rsenghor"
            target="_new"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
          >
            <SlSocialGithub />
          </a>
        </div>
      </div>
      <p className="text-sm md:text-lg flex justify-center items-center">
        <BiCopyright />
        2025 Digital Elite Pro - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
