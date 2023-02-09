import React, { useContext } from "react";
import { UserLogin } from "../helper/Context";

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserLogin);

  return (
    <div>
      <h1>This is home</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Click to Login</button>
      {isLoggedIn ? <h1>You are login</h1> : <h1>you are NOT login</h1>}
    </div>
  );
}

export default Home;
