import style from "@/Styles/UserCardCont.module.css";
import { useStore } from "@/Data/store";

const UserCardCont = () => {
  const { userData, userSet, deleteUserHandler, setPopUpHandler } = useStore();

  const filterUser = userData;
  let getColor = (age: number): String => {
    if (age < 25) return "green";
    else if (age < 51) return "purple";
    return "orange";
  };

  return (
    <div className={style.UserCardContainer}>
      {/*  */}

      {filterUser.map((item, index) => {
        if (6 * Number(userSet) <= index && index < Number(userSet) * 6 + 6) {
          return (
            <div className={style.UserCard} key={Number(item.id)}>
              <div className={style.cardTitle}>
                <span className={style.userName}>
                  {item.name} - {index + 1}
                </span>
                <span
                  className={style.userColor}
                  style={{ backgroundColor: `${getColor(Number(item.age))}` }}
                ></span>
              </div>
              <div className={style.cardBody}>
                {/*  */}
                <span className={style.userProp}>
                  <span className={style.key}>Age</span>
                  <span className={style.value}>{item.age.toString()}</span>
                </span>
                {/*  */}
                <span className={style.userProp}>
                  <span className={style.key}>DOB</span>
                  <span className={style.value}>{item.DOB}</span>
                </span>
                {/*  */}
                <span className={style.userProp}>
                  <span className={style.key}>Gender</span>
                  <span className={style.value}>{item.gender}</span>
                </span>
                {/*  */}
                <span className={style.userProp}>
                  <span className={style.key}>Food</span>
                  <span className={style.value}>{item.food}</span>
                </span>
                {/*  */}
                <span className={style.userProp}>
                  <span className={style.key}>Hobbies</span>
                  <span className={style.value}>{item.hobbies}</span>
                </span>
                {/*  */}
              </div>
              <div className={style.cardFooter}>
                <button
                  onClick={() => {
                    deleteUserHandler(item.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setPopUpHandler({ user: item, item: "view", flag: true });
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => {
                    setPopUpHandler({ user: item, item: "edit", flag: true });
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        }
      })}

      {/*  */}
    </div>
  );
};

export default UserCardCont;
