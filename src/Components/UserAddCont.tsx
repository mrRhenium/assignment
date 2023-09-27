import { useStore } from "@/Data/store";
import style from "@/Styles/UserAddCont.module.css";

const UserAddCont = () => {
  const { setPopUpHandler } = useStore();

  return (
    <div className={style.userAddCont}>
      <h3>List of Users</h3>
      <button
        className={style.userAddBtn}
        onClick={() => {
          setPopUpHandler({ item: "submit", flag: true });
        }}
      >
        ADD USERS
      </button>
    </div>
  );
};

export default UserAddCont;
