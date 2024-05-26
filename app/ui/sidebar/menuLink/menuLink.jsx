'use client'
import Link from "next/link";
import React from "react";
import Styles from "./menuLink.module.css"
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname()
  return (
    <div>
      <Link href={item.path} className={`${Styles.container} ${pathname == item.path && Styles.active}`}>
        {item.icon} {item.title}
      </Link>
    </div>
  );

};

export default MenuLink;
