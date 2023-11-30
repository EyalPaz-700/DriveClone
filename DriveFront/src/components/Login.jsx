import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export const Login = () => {
  const [inputs, setinputs] = useState({});
  const [userDoesntExist, setUserDoesntExist] = useState(false);
  const nav = useNavigate();
  const users = [
    { name: "eyal", password: "eyal55" },
    {
      name: "yoad",
      password: "yoad55",
    },
  ];

  async function checkUser(e) {
    e.preventDefault();
    const allusers = users.filter((user) => user.name === inputs.name)[0];
    console.log("allusers :", allusers);
    try {
      if (
        inputs.name === allusers.name &&
        inputs.password === allusers.password
      ) {
        localStorage.setItem("currentUser", JSON.stringify(inputs));
        nav("/");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form className="form--login">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={inputs.name}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          value={inputs.password}
          onChange={(e) =>
            setinputs((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button onClick={checkUser}>enter</button>
      </form>
    </div>
  );
};
