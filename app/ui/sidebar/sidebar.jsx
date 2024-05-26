import Image from "next/image";
import Styles from "./sidebar.module.css";
import Avatar from "../../../public/next-2.png";
import { MdDashboard, MdAttachMoney } from "react-icons/md";
import { FaUsers, FaBagShopping } from "react-icons/fa6";
import MenuLink from "./menuLink/menuLink";




const Sidebar = () => {
    const menuItems = [
        {
            title: "Users",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,

                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <FaUsers />,

                },
                {
                    title: "Product",
                    path: "/dashboard/products",
                    icon: <FaBagShopping />,

                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />,

                }

            ]
        }
    ]
  return (
    <div className={Styles.container}>
      <div className={Styles.user}>
        <Image src={Avatar} alt="avatar" width={50} height={50} />
        <div className={Styles.userDetail}>
          <span className={Styles.userName}>Hello</span>
          <span className={Styles.userTitle}>World</span>
        </div>
      </div>

      <ul className={Styles.list}>
        {menuItems.map((item) => (
            <li key={item.title}>
                <span className={Styles.item}>{item.title}</span>
                {
                    item.list.map((i) => (
                        // <li>{i.title}</li>
                        <MenuLink item={i} key={i.title}/>
                    ))
                }
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
