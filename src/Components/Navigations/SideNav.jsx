import React, { useState } from "react";
import NavLinks from "./Navigation-Buttons/NavLinks";
import { MdDashboardCustomize } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

const SideNav = ({openNav, navLinks, setCurrentTabName}) => {
  const [activeLink, setActiveLink] = useState("Dashboard");
 

  return (
    <>
      <button className="close-btn absolute top-6 right-5 text-2xl block sm:hidden" onClick={()=>openNav()}><MdClose /></button>
      <p className="text-lg font-semibold mb-5">@PRACTICEPROJECT</p>
      <nav>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.text}>
                <NavLink
                  onClick={() => {
                    setActiveLink(link.text)
                    setCurrentTabName(link.text);
                  }}
                  to={link.path}
                >
                  <NavLinks
                    key={link.text}
                    icon={link.icon}
                    text={link.text}
                    customClass={
                      link.text === activeLink ? "bg-customGrey400" : "bg-white"
                    }
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>

  );
};

export default SideNav;
