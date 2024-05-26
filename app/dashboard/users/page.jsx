import Image from "next/image";
import Avatar from "../../../public/next-2.png";
import Styles from "../../../app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <Link href={"/dashboard/users/add"}>
          <button className={Styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.user}>
                <Image src={Avatar} width={40} height={40} />
                Sanjay Panwar
              </div>
            </td>
            <td>imsanjay390@gmail.com</td>
            <td>12.03.1998</td>
            <td>Admin</td>
            <td>Active</td>
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
              <div className={Styles.user}>
                <Image
                  className={Styles.userImg}
                  src={Avatar}
                  width={40}
                  height={40}
                />
                Sanjay Panwar
              </div>
            </td>
            <td>imsanjay390@gmail.com</td>
            <td>12.03.1998</td>
            <td>Admin</td>
            <td>Active</td>
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
              <div className={Styles.user}>
                <Image
                  className={Styles.userImg}
                  src={Avatar}
                  width={40}
                  height={40}
                />
                Sanjay Panwar
              </div>
            </td>
            <td>imsanjay390@gmail.com</td>
            <td>12.03.1998</td>
            <td>Admin</td>
            <td>Active</td>
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
              <div className={Styles.user}>
                <Image
                  className={Styles.userImg}
                  src={Avatar}
                  width={40}
                  height={40}
                />
                Sanjay Panwar
              </div>
            </td>
            <td>imsanjay390@gmail.com</td>
            <td>12.03.1998</td>
            <td>Admin</td>
            <td>Active</td>
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
              <div className={Styles.user}>
                <Image
                  className={Styles.userImg}
                  src={Avatar}
                  width={40}
                  height={40}
                />
                Sanjay Panwar
              </div>
            </td>
            <td>imsanjay390@gmail.com</td>
            <td>12.03.1998</td>
            <td>Admin</td>
            <td>Active</td>
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

export default UserPage;
