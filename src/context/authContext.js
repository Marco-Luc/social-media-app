import { createContext, useEffect, useState } from "react";
import Leo from "../assets/Images/leo.jpg";

export const AuthContext = createContext();

export const AuthModeContextProvider = ({ children }) => {
  //since we are changing our current user, it runs the useEffect
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  //API is going to return user info

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Bruce",
      profilePic:
        "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
    });
  };

  // user information gets stored in local storage. Then we can use current user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
