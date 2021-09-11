import axios from '../Axios'
import React, { useEffect, useState } from 'react'

function Feedbacks() {
    const [feedback,setFeedback]= useState([])
    useEffect(()=>{
         axios.get('/contact').then(res=>{
             setFeedback(res.data)
         }).catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h2>Feedbacks from users</h2>
            <span>Total Feedback fetched : {feedback.length}</span>
            {
                feedback.map(cont=>{
                    const {id,fullname,email,mobile,text} = cont
                    return(
                    <div>
                         <h3><b>{id} .</b>{fullname}</h3>
                         <em>{email}</em>
                         <p>{mobile}</p>
                         <p>{text}</p>
                         <hr />
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Feedbacks
