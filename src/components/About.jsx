import { axios } from "./Axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Skillbar from "./Skillbar";
function About() {
  const [aboutdata, setAboutdata] = useState({});
  const { name, image, about } = aboutdata;
  const topics = ["html","css","javascript","jquery","react","bootstrap","json",];
  useEffect(() => {
    axios.get("/about/1").then((res) => setAboutdata(res.data));
  }, [name]);

  return (
    <div>
      <Nav />
      <div className="about-heading">
        <img src={image} className="about-back-img" alt={name} />
        <img src={image} className="about-profile-img" alt={name} />
        <h1 className="about-name">{name}</h1>
      </div>
      <div className="about">
        <div className="about-text">
          <h3>Some About Of Me : </h3>
          <p>{about}</p>
        </div>
        <div className="about-skill">
          <Skillbar />
        </div>
      </div>
      <div className="dashbord">
        <div className="dashside">
          {topics.map((v) => {
            return (
              <li className="sidemenu">
                <span className="ho-circle"></span>
                <a href={`#${v}`} className="Link">
                  {v}
                </a>
              </li>
            );
          })}
        </div>
        <div className="dashmain skill-details">
          <Skilldetails />
        </div>
      </div>
    </div>
  );
}

export default About;
function Skilldetails() {
  const [books, setBooks] = useState({ topic: [] });
  useEffect(() => {
    axios.get("/about/1").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      {books.topic.map((topic) => {
        return (
          <div className="skill" id={topic.name}>
            <h3>{`What is ${topic.name}`}</h3>
            <div style={{ display: "flex" }}>
              <img src={topic.img} alt={topic.name} className="skill-img" />
              <p>{topic.text}</p>
            </div>
            <div className="skill-template">
              {topic.templates.map((img) => {
                return (
                  <div>
                    <img src={img} alt={img} className="skill-template-img" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
