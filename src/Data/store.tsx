"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type UserData = {
  id: string;
  name: string;
  age: string;
  DOB: string;
  gender: string;
  food: string;
  hobbies: string;
};

type PopUpType = {
  user: UserData;
  item: string;
  flag: Boolean;
};

type GlobalStore = {
  userData: UserData[];
  userSet: Number;
  popUp: PopUpType;
  setPopUpHandler: (item: PopUpType) => void;
  updateUserHandler: (item: UserData) => void;
  addUserHandler: (item: UserData) => void;
  deleteUserHandler: (id: string) => void;
  setUserSet: Dispatch<SetStateAction<number>>;
};

const data: UserData[] = [
  {
    id: "0",
    name: "Ramesh Kumar",
    age: "18",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "1",
    name: "Dinesh Kumar",
    age: "50",
    DOB: "2002-09-09",
    gender: "male",
    food: "burger",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "2",
    name: "Mahesh Kumar",
    age: "80",
    DOB: "2002-09-09",
    gender: "male",
    food: "pasta",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "3",
    name: "Suresh Kumar",
    age: "18",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "4",
    name: "Kamlesh Kumar",
    age: "70",
    DOB: "2002-09-09",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "5",
    name: "Vinesh Kumar",
    age: "30",
    DOB: "2002-09-09",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "6",
    name: "Suhani Kumari",
    age: "15",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "7",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "8",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "9",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "10",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "11",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "12",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "13",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "14",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "15",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "16",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "17",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "18",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "19",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "20",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "21",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "22",
    name: "Garima Kumari",
    age: "30",
    DOB: "2002-10-08",
    gender: "male",
    food: "pizza",
    hobbies: "I like to play chess.",
  },
  {
    id: "23",
    name: "Poonam Kumari",
    age: "50",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
  {
    id: "24",
    name: "Karishma Kumari",
    age: "5",
    DOB: "2002-09-09",
    gender: "female",
    food: "pizza",
    hobbies: "I like to play cricket and badminton.",
  },
];

let storedData = localStorage.getItem("UserData");

if (!storedData) {
  localStorage.setItem("UserData", JSON.stringify(data));
}

export const Context = createContext<GlobalStore | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData[]>(() => {
    const users = localStorage.getItem("UserData") || "[]";
    return JSON.parse(users) as UserData[];
  });

  const [userSet, setUserSet] = useState<number>(0);

  // PopUp component Information
  const [popUp, setPopUp] = useState<PopUpType>({
    user: {
      id: "",
      name: "",
      age: "",
      DOB: "",
      gender: "male",
      food: "",
      hobbies: "",
    },
    item: "",
    flag: false,
  });

  const setPopUpHandler = (item: PopUpType) => {
    setPopUp(item);
  };

  // Add the new User and Update the localstorage
  const addUserHandler = (newUser: UserData) => {
    setUserData((prev) => {
      const newList = [newUser, ...prev];

      localStorage.setItem("UserData", JSON.stringify(newList));

      console.log(newList);
      return newList;
    });
  };

  // Delete the new User and Update the localstorage
  const deleteUserHandler = (id: string) => {
    setUserData((prev) => {
      const newList = prev.filter((item) => {
        return item.id != id;
      });

      localStorage.setItem("UserData", JSON.stringify(newList));
      console.log(newList);

      return newList;
    });
  };

  // Update the new User and Update the localstorage
  const updateUserHandler = (user: UserData) => {
    setUserData((prev) => {
      const newList = prev.map((item) => {
        if (user.id === item.id) return user;
        else return item;
      });

      localStorage.setItem("UserData", JSON.stringify(newList));

      return newList;
    });
  };

  return (
    <Context.Provider
      value={{
        userData,
        userSet,
        popUp,
        setPopUpHandler,
        setUserSet,
        updateUserHandler,
        addUserHandler,
        deleteUserHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStore = () => {
  const data = useContext(Context);
  if (!data) throw Error("Something went wrong!!");
  return data;
};
