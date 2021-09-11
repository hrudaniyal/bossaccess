import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import axios from "../Axios";
function Employeelogin() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  const Login = (e) => {
    e.preventDefault();
    const uname = e.target.username.value;
    const pword = e.target.password.value;
    const currentuser = employees.filter((e) => e.username ===uname);
    console.log(currentuser)
    console.log(uname)
    const { username, password, id } = currentuser[0];
  
    if (username === uname && password === pword) {
      window.location = `/employeesdashbord`;
      localStorage.setItem("currentuserid", id);
    } else alert("username and password is wrong");
  };
  return (
    <div>
      <Nav />
      <h3>Employees Login</h3>
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
