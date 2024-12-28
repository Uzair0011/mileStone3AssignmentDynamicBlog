"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  // use state Button
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // return
  return (
    <div className=" flex justify-between px-5 py-1 items-center md:items-center w-full h-auto bg-black  text-white md:flex md:justify-between md:px-12 md:h-[76px] overflow-hidden ">
      <div className="block items-center md:flex text-center  ">
        <div className="flex justify-center py-2">
          {/* logo picture */}
          <Image src={"/uzair.jpg"} alt="Logo" width={50} height={50} />
        </div>
        {/* logo text */}
        <div className=" w-auto  text-xl font-bold md:pl-5  md:text-start">
          <Link href={"/"}>
            {" "}
            Uzair Ahmed <br /> Blog
          </Link>
        </div>
      </div>

      <div>
        {/* nav bar */}

        <ul className="hidden md:flex md:gap-10 items-center ">
          <Link href={"/"}>
            <li className="listAll hover:text-blue-300">Home</li>
          </Link>

          <Link href={"/about"}>
            <li className="listAll hover:text-blue-300">About</li>
          </Link>
          <Link href={"/contact"}>
            <li className="listAll hover:text-blue-300">Contact</li>
          </Link>
          <Link
            className="
        bg-custom-blue px-1 rounded-md
        "
            href={"cv.pdf"}
            target="black"
          >
            <li className="listAll font-bold text-yellow-400 hover:text-blue-300">
              {" "}
              DOWNLOAD CV
            </li>
          </Link>
        </ul>

        {/* small navbar */}
        <div className="md:hidden" onClick={toogleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
        {isMenuOpen && (
          <ul className=" top-[60px] right-[10%] fixed z-10 w-full p-3 rounded pl-20 pt-5 bg-black opacity-85 md:hidden">
            <li className="pb-10 pl-3 font-bold text-2xl">
              <a href="/" onClick={toogleMenu}>
                Home
              </a>
            </li>

            <li className="pb-10 pl-3 font-bold text-2xl">
              <a href="#About" onClick={toogleMenu}>
                About
              </a>
            </li>

            <li className="pb-10 pl-3 font-bold text-2xl">
              <a href="#Contact" onClick={toogleMenu}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
