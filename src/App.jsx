
import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const login = () => {
    const dummyUser = { name: "shital", email: "taleshital@28gmail.com" };
    setUser(dummyUser);
    localStorage.setItem("user", JSON.stringify(dummyUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="wrapper">
      <div className="card">
        <div title="Toggle Theme">
          <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
            onClick={toggleTheme}
            className="icon"
          />
        </div>

        {user ? (
          <>
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </div>
  );
};

export default App;
