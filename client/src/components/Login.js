import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useInput } from "../utils/useInput";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input
          label="Username"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <input
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
      </form>
    </>
  );
};

export default Login;
