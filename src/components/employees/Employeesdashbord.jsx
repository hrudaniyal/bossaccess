import React, { useContext, useEffect, useState } from "react";
import axios from "../Axios";
import { Link, Switch, Route } from "react-router-dom";
import Postattendance from "./Postattendance";
import Profile from "./Profile";
import { AuthContext } from "../AuthContext";
function Employeedetails() {
  const [currentemployee, setCurrentemployee] = useState({});
  const id = localStorage.getItem("currentuserid");
  useEffect(() => {
      axios.get(`/employees/${id}`).then((res) => {
      setCurrentemployee(res.data);
    });
  }, [id]);
  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
    alert("successfully logout");
    window.location = "/";
  };
  // context work
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div className="dashbord">
        <div className="dash-side">
          <div className="profile">
            <img
              className="sm-img"
              src={currentemployee.image}
              alt={currentemployee.fullname}
            />
            <h4>{currentemployee.fullname}</h4>
            <span>{currentemployee.jobposition}</span>
          </div>

          <li className="sidemenu">
            <span className="ho-circle"></span>{" "}
            <Link className="Link" to="/employeesdashbord/setattendance">
              Set_Attendances
            </Link>
          </li>
          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to="/employeesdashbord/profile">
              Profile
            </Link>
          </li>
          <div>
            <li className="sidemenu">
              <span className="ho-circle"></span>
              <Link className="Link" to="/employeeattendance">
                Attendances
              </Link>
            </li>

            <button className="back" onClick={logout}>
              {isLoggedIn ? currentemployee.fullname : "logout"}
            </button>
          </div>
        </div>
        <div className="dash-main">
          <Switch>
            <Route path="/employeesdashbord/setattendance">
              <Postattendance currentemployee={currentemployee} userid={id} />
            </Route>
            <Route path="/employeesdashbord/profile">
              <Profile currentemployee={currentemployee} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Employeedetails;
