import { useStore } from "@/Data/store";
import style from "@/Styles/PaginationCont.module.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const PaginationCont = () => {
  const { userData, userSet, setUserSet } = useStore();

  let size: number = Math.ceil(userData.length / 6);

  let pages: number[] = [];
  for (let i = 0; i < size; i++) pages.push(i);

  // console.log(`${size}  ${userSet}`);

  return (
    <div className={style.paginationCont}>
      <span
        className={style.arrowBtn}
        onClick={() => {
          setUserSet((prev) => {
            return (size + prev - 1) % size;
          });
        }}
      >
        <BsArrowLeftCircleFill />
      </span>
      <ul>
        {pages.map((item) => {
          if (Number(userSet) - 4 <= item && item <= Number(userSet) + 4)
            return (
              <li
                className={userSet === item ? style.active : ""}
                key={item}
                onClick={() => {
                  setUserSet(item);
                }}
              >
                {item + 1}
              </li>
            );
        })}
      </ul>
      <span
        className={style.arrowBtn}
        onClick={() => {
          setUserSet((prev) => {
            return (size + prev + 1) % size;
          });
        }}
      >
        <BsArrowRightCircleFill />
      </span>
    </div>
  );
};

export default PaginationCont;
