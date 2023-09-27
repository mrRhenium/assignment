"use client";

import style from "@/Styles/PopUpCont.module.css";
import UserPopUp from "./UserPopUp";
import { useStore } from "@/Data/store";

const PopUpContainer = () => {
  const { setPopUpHandler } = useStore();

  return (
    <div className={style.popUpCont}>
      <div
        className={style.popUpBG}
        onClick={() => {
          setPopUpHandler({ item: "", flag: false });
        }}
      ></div>
      <div className={style.popUp}>
        <UserPopUp />
      </div>
    </div>
  );
};

export default PopUpContainer;
