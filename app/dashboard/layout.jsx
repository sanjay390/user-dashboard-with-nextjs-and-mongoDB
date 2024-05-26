import Sidebar from "../ui/sidebar/sidebar";
import Styles from "../ui/dashboard/dashboard.module.css";
import Navbar from "../ui/navbar/navbar";


const Layout = ({children}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.menu}>
        <Sidebar />
      </div>
      <div className={Styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
