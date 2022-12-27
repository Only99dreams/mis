import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="font-poppins font-semibold ss:text-[28px] text-[12px] text-white ss:leading-[80px] leading-[55px]">
          MIS TECH
        </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title) }
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
      
  
          </li>
          
        ))}
        <button type="button" className={` w-[150px] mx-8 my-1 py-2 px-5 font-poppins font-normal text-[16px] text-primary bg-white rounded-[40px] outline-none`}>
    Contact us
  </button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button type="button" className={`w-[150px] mx-8 my-2 py-1 px-5 font-poppins font-normal text-[20px] text-primary bg-white rounded-[40px] outline-none hover:bg-secondary`}>
    Contact us
  </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
