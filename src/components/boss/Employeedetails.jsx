import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { Link, Switch ,Route} from "react-router-dom";
import Employeeprofile from "./Employeeprofile";
import EmployeeAttendance from "./EmployeeAttendance";
import Notfound from "../../Notfound";
function Employeedetails({ match }) {
  const [currentemployee, setCurrentemployee] = useState([{}]);
  const {fullname,image,jobposition,username} = currentemployee[0]
  const paramid = sessionStorage.getItem('currentemployee')
  useEffect(() => {
    axios
      .get(`/employees/?username=${paramid}`)
      .then((res) => setCurrentemployee(res.data));
  }, []);

  return (
    <>
      {/* <button onClick={match.history.goBack}>Go Back</button> */}

      <div>
        <Link className="Link back" to="/bossdashbord">
          Back
        </Link>
      </div>
      <div className="dashbord">
        <div className="dash-side">
          <div className="profile">
            <img
              className="sm-img"
              src={image}
              alt={fullname}
            />
            <h4>{fullname}</h4>
            <span>{jobposition}</span>
          </div>
          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link" to={`/bossdashbord/overview/profile/${username}`}>
              Profile
            </Link>
          </li>

          <li className="sidemenu">
            <span className="ho-circle"></span>
            <Link className="Link"   to={`/bossdashbord/overview/attendances/${username}`}>
              Attendances
            </Link>
          </li>
        </div>
        <div className="dash-main">
          <Switch>
              <Route exact path={`/bossdashbord/overview/profile/:id`} component={Employeeprofile} />
              <Route exact path={`/bossdashbord/overview/attendances/:id`} component={EmployeeAttendance} />
              <Route path={`/bossdashbord/overview/`} component={Employeeprofile } />
              <Route path='/bossdashbord/overview/*' component={Notfound} />
          </Switch>

        </div>
      </div>
    </>
  );
}

export default Employeedetails;
