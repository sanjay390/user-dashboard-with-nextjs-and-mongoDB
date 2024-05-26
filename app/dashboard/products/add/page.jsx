import Styles from "../../../ui/dashboard/products/add/addProduct.module.css";

import React from "react";

const AddProductPage = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value={'general'}>Choose a Category</option>
          <option value={'kitchen'}>Kitchen Applinces</option>
          <option value={'phone'}>Phone</option>
          <option value={'computer'}>Computer</option>
        </select>
        <input
          type="number"
          placeholder="Price"
          name="price"
          required
        />
        <input type="number" placeholder="Stock" name="stock" required />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="size" name="size" />


      
        <textarea
          name="desc"
          placeholder="Description"
          id="desc"
          rows={16}
        ></textarea>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
