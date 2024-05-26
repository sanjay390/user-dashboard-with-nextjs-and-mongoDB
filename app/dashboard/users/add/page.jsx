import React from "react";
import Styles from "../../../ui/dashboard/users/add/addUser.module.css"
const AddUserPage = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form}>
        <input type="text" placeholder="User Name" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
            <option value={true} >Is Active</option>
            <option value={true} >Yes</option>
            <option value={false} >No</option>
        </select>
        <textarea name="address" placeholder="Address" id="addredd" rows={16}></textarea>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
