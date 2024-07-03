import Image from "next/image"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
// import Avatar from "../../../public/next-2.png";
import Avatar from "../../../../public/next-2.png"
const SingleUser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={Avatar}  alt="" fill />

            </div>
            Sanjay Panwar
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" />
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
                <label>Phone</label>
                <input type="phone" name="phone" placeholder="Phone No" />
                <label>Address</label>
                <textarea type="address" name="address" placeholder="Address" />
                <label>Is Admin ?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Active</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type="submit">Update</button>
            </form>
        </div>
      
    </div>
  )
}

export default SingleUser
