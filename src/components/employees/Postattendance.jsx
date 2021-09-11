import React, { useEffect, useState } from "react";
import { axios } from "../Axios";

function Postattendance({ userid }) {
  const [attend, setAttend] = useState([]);
  const today = new Date().toLocaleDateString();
  useEffect(() => {
    
    axios.get(`/employees/${userid}`).then((res) => {
      setAttend(res.data)
    });
  }, [userid]);
  console.log(attend.attendance)
  const Postdata = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const attendance = e.target.attendance.value;
    const aparture = e.target.aparture.value;
    const departure = e.target.departure.value;
    const id = attendance.length;
    const att = {
      id,
      date,
      attendance,
      aparture,
      departure,
    };
    attend.attendance.push(att);
    axios
      .put(`/employees/${userid}/`, attend)
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      alert('data pushed')
  };

  return (
    <div>
      <span>Today : </span> <b>{today}</b>
      <form onSubmit={Postdata}>
        <label className="form-column">
          <span>Attendance : </span>
          <select name="attendance">
            <option className="options">present</option>
            <option className="options">absent</option>
          </select>
        </label>
        <label className="form-column">
          <span>Aparture : </span>
          <input name="aparture" type="time" />
        </label>
        <label className="form-column">
          <span>Departure : </span>
          <input name="departure" type="time" />
        </label>
        <label className="form-column">
          <span></span>
          <button className="btn">Post Attendance</button>
        </label>
      </form>
    </div>
  );
}

export default Postattendance;
