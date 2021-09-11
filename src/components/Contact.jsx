import axios from "./Axios";
import React  from "react";
import Nav from "./Nav";
import { useHistory } from "react-router";
function Contact() {
     const go = useHistory()
     console.log(go)
    const postContact=(e)=>{
       e.preventDefault()
       const fullname = e.target.fullname.value
       const email = e.target.email.value
       const mobile = e.target.mobile.value
       const text = e.target.text.value
       const contact = {fullname,email,mobile,text}
       console.log(contact)
       axios.post('/contact',contact).then(res=>console.log(res.data)).catch(error=>console.log(error))
       alert('you have posted data !!! ')
       go.push('/')
    }
  return (
    <>
      {go.location.pathname === '/' ? '' : <Nav />}
      <div className="contact" onSubmit={postContact}>
        <h2>Contact Us : </h2>
        <form className="contact-form">
          <label className="contact-column">
            <span>Fullname </span> <span>:</span>
            <input type="text" name="fullname" placeholder="fullname..." />
          </label>
          <label className="contact-column">
            <span>Email </span> <span>:</span>
            <input type="mail" name="email" placeholder="email..." />
          </label>
          <label className="contact-column">
            <span>Mobile </span>
            <span>:</span>
            <input
              type="number"
              name="mobile"
              placeholder="mobile number..."
            />
          </label>
          <label className="contact-column">
            <span>Text </span>
            <span>:</span>
            <textarea
              type="text"
              name="text"
              rows="5"
              placeholder="write something..."
            ></textarea>
          </label>
          <label className="contact-column">
            <span></span>
            <span></span>
            <button className="contact-submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default Contact;
