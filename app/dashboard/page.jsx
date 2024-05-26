import Transactions from "../ui/transactions/transactions";
import Styles from "../../app/ui/dashboard/dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.main}></div>
      <Transactions />

    </div>
  )
};

export default Dashboard;
