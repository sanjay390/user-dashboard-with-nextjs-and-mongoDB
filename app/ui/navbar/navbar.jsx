"use client"
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineChat, MdNotifications, MdPublic } from "react-icons/md";
import Styles from "../navbar/navbar.module.css"
import { usePathname } from "next/navigation";



const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>{pathname.split("/").pop()}</div>
      <div className={Styles.menu}>
        <div className={Styles.search}>
          <FaSearch />
          <input type="text" placeholder="Search..." className={Styles.input} />
        </div>
        <div className={Styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} /> 
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
