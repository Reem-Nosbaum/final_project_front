import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import handleSignup from "../utils/signupService";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [credit_card_number, setCredit_card_number] = useState("");

  const handelUsername = (e) => {
    setUsername((pre) => e.target.value);
  };
  const handelPassword = (e) => {
    setPassword((pre) => e.target.value);
  };
  const handelUEmail = (e) => {
    setEmail((pre) => e.target.value);
  };
  const handelFirst_name = (e) => {
    setFirst_name((pre) => e.target.value);
  };
  const handelLast_name = (e) => {
    setLast_name((pre) => e.target.value);
  };
  const handelAddress = (e) => {
    setAddress((pre) => e.target.value);
  };
  const handelPhone_number = (e) => {
    setPhone_number((pre) => e.target.value);
  };
  const handelCredit_card_number = (e) => {
    setCredit_card_number((pre) => e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      address: address,
      phone_number: phone_number,
      credit_card_number: credit_card_number,
    };
    handleSignup(reqBody);
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
        <TextField
          onChange={handelUEmail}
          label="email"
          variant="filled"
          required
        />
        <br />
        <TextField
          onChange={handelFirst_name}
          label="first_name"
          variant="filled"
          required
        />
        <br />{" "}
        <TextField
          onChange={handelLast_name}
          label="last_name"
          variant="filled"
          required
        />
        <br />
        <TextField
          onChange={handelAddress}
          label="address"
          variant="filled"
          required
        />
        <br />{" "}
        <TextField
          onChange={handelPhone_number}
          label="phone_number"
          variant="filled"
          required
        />
        <br />
        <TextField
          onChange={handelCredit_card_number}
          label="credit_card_number"
          variant="filled"
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Signup
        </Button>
      </form>
    </div>
  );
}
