import { useEffect, useState } from "react";
import { axios } from "./Axios";

function Skilldetails() {
  const [books, setBooks] = useState({topic:[]});
  console.log(books);
  useEffect(() => {
    axios.get("/about/1").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      {books.topic.map((topic) => {
        return <div className="skill" id={`#${topic.name}`}>
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
        </div>;
      })}
    </div>
  );
}
export default Skilldetails;
