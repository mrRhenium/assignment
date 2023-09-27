"use client";

import style from "@/Styles/HomePage.module.css";
import UserAddCont from "@/Components/UserAddCont";
import UserCardCont from "@/Components/UserCardCont";
import PaginationCont from "@/Components/PaginationCont";
import PopUpContainer from "@/Components/PopUpContainer";
import ThemeButton from "@/Components/ThemeButton";

import { BiSolidUser } from "react-icons/bi";
import { useStore } from "@/Data/store";

const Home = () => {
  const { popUp } = useStore();

  return (
    <main className={style.container}>
      {/* PopUP Component Start */}
      {popUp.flag ? <PopUpContainer /> : null}
      {/* PopUP Component End */}

      {/* HomePage :  UpperSection Start */}
      <section className={style.upperSection}>
        <h2>User's Inventory</h2>
        <ThemeButton />
        <span className={style.avtarCover}>
          <BiSolidUser />
        </span>
      </section>
      {/* HomePage :  UpperSection End */}

      {/* HomePage :  MiddleSection Start */}
      <section className={style.middleSection}>
        <UserAddCont />
        <UserCardCont />
      </section>
      {/* HomePage :  MiddleSection End */}

      {/* HomePage :  LowerSection Start */}
      <section className={style.lowerSection}>
        <PaginationCont />
      </section>
      {/* HomePage :  LowerSection End */}
    </main>
  );
};

export default Home;
