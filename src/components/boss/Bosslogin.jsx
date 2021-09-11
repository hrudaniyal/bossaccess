import React, { useEffect, useState } from "react";
import Axios from "axios";
import Nav from "../Nav";
function Employeelogin() {
  const [boss, setBoss] = useState();
  useEffect(() => {
    Axios.get("http://localhost:5555/boss/").then((res) => {
      setBoss(res.data);
    });
  }, []);
  const Login = (e) => {
    e.preventDefault();
    const uname = e.target.username.value;
    const pword = e.target.password.value;
    const { username, password } = boss[0];
    if (username === uname && password === pword) {
      window.location = "/bossdashbord";
    } else alert("username and password is wrong");
  };
  return (
    <div>
      <Nav />
      <h3>Boss Login</h3>
      <form className="login-form" onSubmit={Login}>
        <label className="form-column">
          <span>Username : </span>
          <input type="text" name="username" />
        </label>
        <label className="form-column">
          <span>Password : </span>
          <input type="password" name="password" />
        </label>
        <label className="form-column">
          <span> </span>
          <input className="btn" type="submit" value="Sign In" />
        </label>
      </form>
    </div>
  );
}

export default Employeelogin;
