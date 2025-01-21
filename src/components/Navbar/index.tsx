"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import arrow from "@/public/Arrow Right.png";
import downwardarrow from "@/public/Arrow (1).png";
import Drawer from "../ui/Drawer";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/themes/light.css';

import logo from "@/public/logo-innate.png";
import Image from "next/image";
import { useTabContext } from "@/context/TabContsxt";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useTabContext();
  const onServicesClose = () => { setIsServicesOpen(false); }
  const onClose = () => { setIsOpen(false); setIsDropdownOpen(false); console.log(isOpen) }
  const onOpen = () => setIsOpen(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);



  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    // console.log(isDropdownOpen);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab); // Update context
  };
  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);
  const saveTabTitle = (tab: string) => {
    const tabTitles: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/contact": "Contact",
      "/services": "Services",
      "/onboarding": "on Boarding",
      "/press": "Press",
      "/work": "Work",
      // Add more mappings as needed
    };

    // Update the document's title based on the active tab
    document.title = tabTitles[tab] || "My App";
  };

  // Automatically set the tab title when `activeTab` changes
  useEffect(() => {
    saveTabTitle(activeTab);
  }, [activeTab]);

  // const dropdownContent = (
  //   <ul className="bg-[#333333] text-white shadow-lg rounded-lg z-[1000] min-w-[200px]">
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Architecture
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Kitchens & Bathrooms
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Construction
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Roofing
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Decks & Patio Covers
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Siding
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Windows & Doors
  //       </a>
  //     </li>
  //     <li>
  //       <a
  //         href=""
  //         className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
  //       >
  //         Natural Disaster Mitigation
  //       </a>
  //     </li>
  //   </ul>
  // );

  return (
    <>
      <nav className=" absolute  min-h-[134px] z-50  w-full px-16 md:px-20 mob:px-5 ">
        <div className="flex justify-center items-center w-full min-h-[134px] ">
          <div className="  min-h-[134px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex    justify-between w-full    pb-4">
              <Link
                href="/"
                className="flex  mob:justify-start space-x-3 rtl:space-x-reverse"
              >
                <Image
                  className="mob:max-w-[200px]"
                  onClick={() => handleTabChange("/")}
                  src={logo}
                  alt="Flowbite Logo"
                  width={259}
                  height={56}
                />
              </Link>
              <div className="flex xl:pr-4 xl:hidden  pt-2">
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-light text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${isOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  {/* Your menu options */}
                  <ul className="font-light mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[24px] md:flex-row  rtl:space-x-reverse md:mt-0  tab:bg-black">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => handleTabChange("/about")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/about"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/work"
                        onClick={() => handleTabChange("/work")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/work"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        Work
                      </Link>
                    </li>
                    <li className="relative group">
                      <div
                        onClick={() => { handleTabChange("/services"); toggleDropdown() }}
                        className={` cursor-pointer block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/services"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        <div className="flex items-center gap-1 "> Services <Image src={downwardarrow} alt="" width={24} height={24} /></div>

                      </div>
                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <ul className="absolute left-0 min-w-[200px] bg-[#333333] text-white shadow-lg rounded-lg">
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Architecture
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Kitchens & Bathrooms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Construction
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Roofing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Decks & Patio Covers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Siding
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Windows & Doors
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Natural Disaster Migitation
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        href="/press"
                        onClick={() => handleTabChange("/press")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/press"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => handleTabChange("/contact")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/contact"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* tab and mob  menu*/}
              <div className="hidden xl:block  ">
                <div
                  className="relative cursor-pointer flex pt-[5px]"
                  onClick={() => {
                    if (isOpen) {
                      onClose();
                      onServicesClose();
                    } else {
                      onOpen();
                    }
                  }}

                >
                  <button
                    type="button"
                    className={`relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-md focus:outline-none ${isOpen}? "hidden" : `}
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span
                      className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[4px]" : ""}`}
                    ></span>
                    <span
                      className={`block w-6 h-0.5 bg-white mt-1.5 transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
                    ></span>
                  </button>

                </div>

                {/* side menu */}
                <div className="relative z-40">
                  <Drawer isOpen={isOpen} >
                    <div className="flex h-full w-full z-0 ">
                      <ul className="font-light  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/about"
                          onClick={() => handleTabChange("/about")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/about"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            About
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/work"
                          onClick={() => handleTabChange("/work")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/work"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Work
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <li className="flex ms-5 py-[15px] list-items z-40">
                          <div className="z-50 block text-center text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] cursor-pointer" onClick={toggleDropdown}>
                            <div className="flex items-center gap-1"
                              aria-controls="navbar-default"
                              aria-expanded={isServicesOpen ? "true" : "false"}
                              onClick={() => setIsServicesOpen(true)}>
                              Services
                              <Image src={arrow} alt="Dropdown arrow" width={24} height={24} />
                            </div>
                          </div>
                          {/* <Tippy
                            content={dropdownContent}
                            interactive={true}
                            placement="bottom"
                            arrow={false}
                            visible={isDropdownOpen}
                            onClickOutside={() => setIsDropdownOpen(false)}
                          >
                            <div className="z-50 block text-center text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] cursor-pointer" onClick={toggleDropdown}>
                              <div className="flex items-center gap-1">
                                Services
                                <Image src={arrow} alt="Dropdown arrow" width={24} height={24} />
                              </div>
                            </div>
                          </Tippy> */}
                        </li>

                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/press"
                          onClick={() => handleTabChange("/press")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/press"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Press
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/contact"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Contact
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </Drawer>
                </div>


                {/* services menu */}
                <div className="relative z-40">
                  <Drawer isOpen={isServicesOpen} >
                    <div className="flex flex-col h-full w-full z-0 ">
                      {/* <div> */}
                      {/* <div className=" " > */}
                      <div className="flex items-center text-center text-[20px] font-inter font-medium leading-[25.5px]  mt-10 text-[#FFFFFF]">
                        <Image src={arrow} alt="Dropdown arrow" className="rotate-180 cursor-pointer hover:text-[#2CFF06]" width={50} height={50} onClick={() => setIsServicesOpen(false)} />
                        Services
                      </div>
                      {/* </div> */}
                      {/* </div> */}
                      <ul className="font-light  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/about")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/about"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Architecture
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/serives"
                          onClick={() => handleTabChange("/work")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/work"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Kitchens & Bathrooms
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/serives"
                          onClick={() => handleTabChange("/work")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/work"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Construction
                          </li>
                        </Link>

                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/press")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/press"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Roofing
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Decks & Patio Covers
                          </li>
                        </Link>

                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Siding
                          </li>
                        </Link>
                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Windows & Doors
                          </li>
                        </Link>
                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Natural Disaster Mitigation
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </Drawer>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
