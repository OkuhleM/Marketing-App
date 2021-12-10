import React from 'react'
import { useDispatch } from "react-redux";
import { login } from  '../features/user';
import { Link} from 'react-router-dom';
import { useState } from 'react'

function JobList() {
   const dispatch = useDispatch()
 

    
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
<div>
<table>
  <tr>
    <th>Job Name</th>
    <th>Location</th>
    <th>Position</th>
    <th>Annual Salary</th>
    <th>Job Apply</th>
  </tr>
  <tr>
    <td>Surgeon</td>
    <td>Tembisa</td>
    <td>Head Of surgery</td>
    <td>R3,288,429</td>
    <td><Link to="/jobapplication"><button className="buttons">Select</button></Link></td>
  </tr>
  <tr>
    <td>Teacher</td>
    <td>Howick</td>
    <td>HOD</td>
    <td>R346 000</td>
    <td><Link to="/jobapplication"><button className="buttons">Select</button></Link></td>
  </tr>
  <tr>
    <td>Proof Reader</td>
    <td>Sandton</td>
    <td>Editor in Chief</td>
    <td>R246 000</td>
    <td><Link to="/jobapplication"><button onSubmit="handleSubmit" className="buttons">Select</button></Link></td>
  </tr>
</table>
</div>

<div>
                <ul className="form-list">{JobFormList.map((jobform, index) => {
                    return (
                        <div key={index} className="ptags">
                            <p><h1>Job Name:</h1>{jobform.jobname}</p>
                            <p><h1>Place:</h1>{jobform.place}</p>
                            <p><h1>Salary:</h1>{jobform.salary}</p>
                            <p><h1>position:</h1>{jobform.position}</p><br/>
                           <Link to="/joblist"> <button>Apply</button></Link>
                          <hr></hr>
                           
                        </div>

                    )
                })}</ul>
            </div>
        </div>
    )
}

export default JobList
