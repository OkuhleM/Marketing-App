import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function JobForm(props) {
    
    const [formInfo, setFormInfo]=useState({
        jobname:'',place:'', salary: '', position: '',
 
 })
 const [JobFormList, setJobFormList]=useState([])
 const handleChange =(e)=>{
   setFormInfo({...formInfo, [e.target.name]:e.target.value})
   console.log(setFormInfo)
 }
 const handleSubmit=(e)=>{
   e.preventDefault()
   setJobFormList([...JobFormList, formInfo])
   console.log(setJobFormList)
 }
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <label>Job Name:</label> 
             <input name="jobname" type="text" onChange={handleChange} value={formInfo.jobname}></input><br />
                <label>Place:</label> 
                <input type="text" name="place" onChange={handleChange} value={formInfo.place}></input><br />
                
               <label> Salary: </label>
               <input type="number" name="salary" onChange={handleChange} value={formInfo.salary}></input><br />
                <label>Position:</label> 
                <input type="text" name="position" onChange={handleChange} value={formInfo.position}></input><br />
               <button className="submit">Submit</button>
            </form>


<div>
                <ul className="form-list">{JobFormList.map((jobform, index) => {
                    return (
                        <div key={index} className="ptags">
                            <p><h1>Job Name:</h1>{jobform.jobname}</p>
                            <p><h1>Place:</h1>{jobform.place}</p>
                            <p><h1>Salary:</h1>{jobform.salary}</p>
                            <p><h1>position:</h1>{jobform.position}</p><br/>
                           <Link to="/joblist"> <button>Submit</button></Link>
                          <hr></hr>
                           
                        </div>

                    )
                })}</ul>
            </div>
        </div>
    )
}

export default JobForm
