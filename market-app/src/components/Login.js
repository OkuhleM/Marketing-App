import React from 'react';
import { useState } from 'react'

function Login(props) {

    const [formInfo, setFormInfo]=useState({
        name:'',surname:'', dropDown: ''
 
 })
 const [List, setList]=useState([])
 const handleChange =(e)=>{
   setFormInfo({...formInfo, [e.target.name]:e.target.value})
   console.log(setFormInfo)
 }
 const handleSubmit=(e)=>{
   e.preventDefault()
   setList([...List, formInfo])
   console.log(setList)
 }
    return (
        <div>
            <form>
            <fieldset>
                    <legend><h1>Personalia:</h1> </legend>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formInfo.name} /><br/>
                <input type="text" name="surname" placeholder="Surname" onChange={handleChange} value={formInfo.surname} /><br />
                <select>
                    <label> dropDown</label>
                    <option>Advertise</option>
                    <option>Apply For A Job</option>
                </select><br />
                <button>Submit</button>
                </fieldset>
            </form>

            <div>
                <ul>{List.map((list, index) => {
                    return (
                        <div key={index} className="votersList">
                            <p>{list.name}</p>
                            <p>{list.surname}</p>
                            <p>{list.dropDown}</p>
                            
                        </div>

                    )
                })}</ul>
            </div>

        </div>
    )
}

export default Login
