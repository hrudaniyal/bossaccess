import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "../Axios";
function Employeeprofile() {
  const params = sessionStorage.getItem("currentemployee");
  const [user, setUser] = useState([{}]);
  const {
    fullname,
    about,
    username,
    image,
    jobposition,
    salary,
    currentproject,
    islogin,
    joiningdate,
  } = user[0];
  useEffect(() => {
    axios.get(`/employees/?username=${params}`).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div>
      <div className="em-profile-head">
        <div>
          <img src={image} alt={fullname} className="em-profile-img" />
        </div>
        <div>
          <h3>{fullname}</h3>
          <p>
            <span>jobposition : </span>
            {jobposition}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h3>About Me : </h3>
        <p className="em-about-me">{about}</p>
      </div>

      <div className="em-profile-body">
        <div >
        <section className='em-profile-content'>
              <h4>Salary</h4><span>:</span><p>{salary}</p>
        </section>
        <section className='em-profile-content'>
              <h4>Job_position</h4><span>:</span><p>{jobposition}</p>
        </section>
        <section className='em-profile-content'>
              <h4>Current_project</h4><span>:</span><p>{currentproject}</p>
        </section>
        <section className='em-profile-content'>
              <h4>Joining_date</h4><span>:</span><p>{joiningdate}</p>
        </section>
        </div>
      </div>
    </div>
  );
}

export default Employeeprofile;
