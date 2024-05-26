import Image from "next/image";
import Avatar from "../../../public/next-2.png";
import Styles from "../../../app/ui/dashboard/products/products.module.css";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Link href={"/dashboard/products/add"}>
          <button className={Styles.addButton}>Add Product</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.product}>
                <Image src={Avatar} width={40} height={40} />
                Laptop
              </div>
            </td>
            <td>Its a mac</td>
            <td>$1000</td>
            <td>14.04.2022</td>
            <td>Avalaible</td>
            <td>
              <button className={`${Styles.button} ${Styles.view}`}>
                View
              </button>
              <button className={`${Styles.button} ${Styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={Styles.product}>
                <Image src={Avatar} width={40} height={40} />
                Laptop
              </div>
            </td>
            <td>Its a mac</td>
            <td>$1000</td>
            <td>14.04.2022</td>
            <td>Avalaible</td>
            <td>
              <button className={`${Styles.button} ${Styles.view}`}>
                View
              </button>
              <button className={`${Styles.button} ${Styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>

        
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
