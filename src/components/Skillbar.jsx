import React, { useEffect, useState } from "react";
import { axios } from "./Axios";

function Skillbar() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("about/1").then((res) => {
      setSkills(res.data.skills);
    });
  }, []);
  return (
    <div>
         <h3>My Skills Bar : </h3>
      {skills.map((skill) => {
        return (
          <lable className="skillbar">
            <span>{skill.name} </span>
            <span>:</span>
            <input type="range" value={skill.value} />
            <span>{`${skill.value}%`}</span>
          </lable>
        );
      })}
    </div>
  );
}

export default Skillbar;
