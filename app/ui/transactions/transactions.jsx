import Image from "next/image";
import React from "react";
import Avatar from "../../../public/next-2.png";
import Styles from "./transactions.module.css"

const Transactions = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Latest Transactions</h2>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}> 
                {" "}
                <Image className={Styles.userImg} src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$199</td>
          </tr> 

          <tr>
            <td>
              <div className={Styles.user}>
                {" "}
                <Image className={Styles.userImg} src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$199</td>
          </tr>

          <tr>
            <td>
              <div className={Styles.user}>
                {" "}
                <Image className={Styles.userImg} src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$199</td>
          </tr>

          <tr>
            <td>
              <div className={Styles.user}>
                {" "}
                <Image className={Styles.userImg} src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$199</td>
          </tr>

          <tr>
            <td>
              <div className={Styles.user}>
                {" "}
                <Image className={Styles.userImg} src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>
              <span className={`${Styles.status} ${Styles.cancel}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$199</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
