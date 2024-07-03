import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const singleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/next-2.png"} alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="text" name="Stock" placeholder="Stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="size" />
          <label>Category</label>
          <select name="category" id="category">
            <option value={"laptop"}>Laptop</option>
            <option value={"pc"}>PC</option>
          </select>
          <label>Description</label>
          <textarea name="description" id="description">
            {" "}
          </textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleProduct;
