import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import handleLogin from "../utils/loginService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelUsername = (e) => {
    setUsername((pre) => e.target.value);
  };
  const handelPassword = (e) => {
    setPassword((pre) => e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const reqBody = { username: username, password: password };
    handleLogin(reqBody);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <TextField
          onChange={handelUsername}
          label="username"
          variant="filled"
          required
        />
        <br />
        <TextField
          onChange={handelPassword}
          label="password"
          variant="filled"
          type="password"
          required
        />
        <br />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}
