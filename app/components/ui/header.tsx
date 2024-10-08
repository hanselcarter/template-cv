"use client";
import Image from "next/image";
import headerImage from "../../../assets/header.png";
import logoImage from "../../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-32">
          <Image
            src={logoImage}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <button
            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
            onClick={() =>
              window.open(
                "https://www.canva.com/design/DAF0zpwpMOI/AJs1NANZK2FktGI19g-xFQ/view?utm_content=DAF0zpwpMOI&utm_campaign=designshare&utm_medium=link&utm_source=editor",
                "_blank"
              )
            }
          >
            Get my CV
          </button>
        </nav>

        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image
              src={headerImage}
              alt="Image"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Hansel Carter
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Senior Software Engineer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            I have a passion for software. I enjoy creating tools that make life
            easier for people.
          </p>

          <a
            href="mailto:barahonahansel@hotmail.com?subject=hire"
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
