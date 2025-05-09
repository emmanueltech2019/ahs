"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import logoImg from "./img/logo 1.png";
import Link from "next/link";
import SearchModal from "./components/SearchModal";
import data from "@/app/data";

const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  function handleToggle() {
    setToggle(!toggle);
  }
  const handleNavigation = (page: string) => {
    setToggle(false);
    setModal(false);
    window.location.href = page;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* <section className="absolute w-full z-50"> */}
      {/* <section className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-white/20 shadow-md"> */}
      <section
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#000]/60 shadow-md border-b border-[#439DD0]/10"
            : "bg-transparent"
        }`}
      >
        <div className="md:w-[85%] m-auto p-4 overflow-hidden">
          <header className="flex justify-between items-center">
            <div className="logo">
              <Link href="/">
                <Image src={data.logo} width={"150"} height={"100"} alt="alt" />
              </Link>
            </div>
            <div className="toggle/user flex items-center gap-6">
              <div className="toggle/user flex items-center gap-6">
                <div className="search cursor-pointer">
                  <Icon
                    icon="ant-design:search-outlined"
                    className="text-[30px] text-[#fff]"
                    onClick={handleModal}
                  ></Icon>
                </div>
                <div className="bg-[#fff] flex items-center shadow-sm shadow-[#08080847] p-1 rounded-full gap-1">
                  <div className="toggle">
                    <Icon
                      icon="mi:menu"
                      className="text-[#2c2c2ca1] text-[30px]"
                      onClick={handleToggle}
                    ></Icon>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <nav
            className={
              !toggle
                ? " absolute w-[400px] m-auto flex flex-col justify-center items-center text-center shadow-md bg-[#ffff] shadow-[#08080847] p-4 rounded-3xl transition-all ease-in-out duration-500 scale-[20%] top-[-300px] sm:right-40"
                : "fixed md:w-[345px] w-[95vw] h-[35vh] z-[10000] m-auto md:m-0 flex flex-col justify-center items-center text-center shadow-md bg-[#ffff] shadow-[#08080847] p-4 rounded-3xl transition-all ease-in-out duration-500 scale-100 top-20 sm:right-0"
            }
          >
            <ul className="text-center flex flex-col my-3 gap-3 w-[70%]">
              <li
                className="rounded-full p-2 hover:border border-[#000000] cursor-pointer"
                onClick={() => handleNavigation("/about")}
              >
                About Us
              </li>
              <li
                className="rounded-full p-2 hover:border border-[#000000] cursor-pointer"
                onClick={() => handleNavigation("/faq")}
              >
                FAQ
              </li>

              <li
                className="rounded-full p-2 hover:border border-[#000000] cursor-pointer"
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </li>

              {/* <li className='rounded-full p-2 border border-[#000000] cursor-pointer'>Log out</li> */}
            </ul>
          </nav>
        </div>
      </section>

      <section>
        <SearchModal modal={modal} setModal={setModal} />
      </section>
    </div>
  );
};

export default NavBar;
