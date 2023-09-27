"use client";

import style from "@/Styles/UserPopUp.module.css";

import { FormEvent, useEffect, useState } from "react";
import { UserData, useStore } from "@/Data/store";

const UserPopUp = () => {
  //
  const { popUp, setPopUpHandler, addUserHandler, updateUserHandler } =
    useStore();

  // Storing Form data in it.
  const [form, setForm] = useState<UserData>({
    id: "",
    name: "",
    age: "",
    DOB: "",
    gender: "male",
    food: "",
    hobbies: "",
  });

  useEffect(() => {
    if (popUp.user) setForm(popUp.user);
  }, []);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(form);

    if (popUp.item === "submit")
      addUserHandler({ ...form, id: Date.now().toString() });
    else updateUserHandler(form);

    setForm({
      id: "",
      name: "",
      age: "",
      DOB: "",
      gender: "male",
      food: "",
      hobbies: "",
    });
  };

  return (
    <div className={style.container}>
      <form action="" onSubmit={submitHandler}>
        {/*  */}

        {/* Form Header Start */}
        <span className={style.header}>
          <h2>ADD USER</h2>
        </span>
        {/* Form Header End */}

        {/* Form Body Start */}
        <span className={style.body}>
          <span className={style.inputBox}>
            <label htmlFor="nameInput">NAME</label>
            <input
              type="text"
              name="name"
              id="nameInput"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              readOnly={popUp.item === "view"}
              required
            />
          </span>
          {/*  */}
          <span className={style.inputBox}>
            <label htmlFor="ageInput">AGE</label>
            <input
              type="number"
              name="age"
              id="ageInput"
              value={form.age}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, age: e.target.value };
                })
              }
              readOnly={popUp.item === "view"}
              required
            />
          </span>
          {/*  */}
          <span className={style.inputBox}>
            <label htmlFor="dobInput">DOB</label>
            <input
              type="date"
              name="dob"
              id="dobInput"
              value={form.DOB}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, DOB: e.target.value };
                })
              }
              readOnly={popUp.item === "view"}
              required
            />
          </span>
          {/*  */}
          <span className={style.inputBox}>
            <label htmlFor="genderInput">GENDER</label>
            <span>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="male"
                onClick={() =>
                  setForm((prev) => {
                    return { ...prev, gender: "male" };
                  })
                }
                checked={form.gender === "male"}
                readOnly
                required
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="female"
                onClick={() =>
                  setForm((prev) => {
                    return { ...prev, gender: "female" };
                  })
                }
                checked={form.gender === "female"}
                readOnly
              />
            </span>
          </span>
          {/*  */}
          <span className={style.inputBox}>
            <label htmlFor="foodInput">FAVOURITE FOOD</label>
            <select
              name="food"
              id="foodInput"
              value={form.food}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, food: e.target.value };
                })
              }
              required
            >
              <option value="">None</option>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="pasta">Pasta</option>
            </select>
          </span>
          {/*  */}
          <span className={style.inputBox}>
            <label htmlFor="hobbies">HOBBIES</label>
            <textarea
              name="hobbies"
              id="hobbies"
              cols={10}
              rows={5}
              value={form.hobbies}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, hobbies: e.target.value };
                })
              }
              readOnly={popUp.item === "view"}
              required
            ></textarea>
          </span>
        </span>
        {/* Form Body End */}

        {/* Form Footer Start */}
        <span className={style.footer}>
          <button
            onClick={() => {
              setPopUpHandler({
                user: popUp.user,
                item: "",
                flag: false,
              });
            }}
          >
            CANCEL
          </button>
          {popUp.item === "submit" ? (
            <button>SUBMIT</button>
          ) : popUp.item === "edit" ? (
            <button>Edit</button>
          ) : null}
        </span>
        {/* Form Footer End */}

        {/*  */}
      </form>
    </div>
  );
};

export default UserPopUp;
