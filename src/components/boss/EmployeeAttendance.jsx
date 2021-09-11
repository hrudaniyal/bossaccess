import React, { useEffect, useState } from "react";
import axios from "../Axios";
function EmployeeAttendance({ match }) {
  const [attendance, setAttendance] = useState([]);
  
  const id = sessionStorage.getItem('currentemployee')
  useEffect(() => {
    axios.get(`/employees/?username=${id}`).then((res) => {
      setAttendance(res.data[0].attendance);
    });
  }, []);
  return (
    <div>
      <h2>Attendance</h2>
      <h4 style={{color:'#ddd'}}>Total Attendance : {attendance.length}</h4>
      {
          attendance.map(att=>{
              const {date,attendance} = att
              return(
                  <div>
                      <p className='att-row'>date : {date} , attendance : {attendance}</p>
                  </div>
              )
          })
      }
    </div>
  );
}

export default EmployeeAttendance;
