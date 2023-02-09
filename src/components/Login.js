import React, { useContext } from "react";
import { UserLogin } from "../helper/Context";
function Login() {
  const { isLoggedIn } = useContext(UserLogin);
  return (
    <div>
      <h1>This is Login</h1>
      {isLoggedIn ? <h1>You are login</h1> : <h1>you are NOT login</h1>}
    </div>
  );
}

export default Login;
