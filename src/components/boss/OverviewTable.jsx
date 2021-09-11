import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axios } from "../Axios";
function OverviewTable() {
  const [employees, setEmployees] = useState([]);
  const [boss, setBoss] = useState({});
  const { image, name } = boss;
  useEffect(() => {
    fetchEmployees();
    fetchBoss();
  }, []);
  const fetchEmployees = async () => {
    await axios.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  };
  const fetchBoss = async () => {
    axios.get("/boss/1").then((res) => setBoss(res.data));
  };

  return (
    <div>
        
          <table className="table">
            <thead>
              <tr className="theading">
                <td className="ttitle">S/L</td>
                <td className="ttitle">Date</td>
                <td className="ttitle">Name</td>
                <td className="ttitle">Attendance</td>
                <td className="ttitle">Salary</td>
                <td className="ttitle">Joining date</td>
                <td className="ttitle">Position</td>
              </tr>
            </thead>
            <tbody>
              {employees.map((v) => {
                const {
                  id,
                  fullname,
                  username,
                  attendance,
                  jobposition,
                  salary,
                  joiningdate,
                } = v;
                const today = new Date().toLocaleDateString();
                const att = attendance.filter((v) => v.date === today);
                // saving username to localstorage
                const saveCurrentUser = () => {
                  sessionStorage.setItem("currentemployee", username);
                };
                const attStatus = () =>
                  att.length === 0 ? "pending" : "present";
                return (
                  <tr className="theading" key={id}>
                    <td className="tdata">{id}</td>
                    <td className="tdata">{today}</td>
                    <td className="tdata">
                      <Link
                        className="Link"
                        onClick={saveCurrentUser}
                        to={`/bossdashbord/overview/${id}`}
                      >
                        {fullname}
                      </Link>
                    </td>
                    <td className="tdata">{attStatus()}</td>

                    <td className="tdata">{salary}</td>
                    <td className="tdata">{joiningdate}</td>

                    <td className="tdata">{jobposition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
  );
}

export default OverviewTable;
