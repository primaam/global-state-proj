import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserLogin } from "./helper/Context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserLogin.Provider
      value={{ isLoggedIn, setIsLoggedIn }}
      className="App"
      style={{
        textAlign: "center",
      }}
    >
      <Home />
      <Login />
      <Profile />
    </UserLogin.Provider>
  );
}

export default App;
