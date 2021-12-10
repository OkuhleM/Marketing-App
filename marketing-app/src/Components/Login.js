import React from 'react';
import { useState  } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Login(props) {
    const user = useSelector((state) => state.user.value);

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
        <div className="Login-form">
            <div className="form-styling">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h1>Personalia</h1> </legend>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formInfo.name} /><br/>
                <input type="text" name="surname" placeholder="Surname" onChange={handleChange} value={formInfo.surname} /><br />
                <select name="selectList">
                    <label> dropDown</label>
                    <option value="advertise">Advertise</option>
                    <option value="seek">Seek</option>
                </select><br />
                <button className="button">Submit</button>
                </fieldset>
            </form>
            </div>

<div>
                <ul>{List.map((list, index) => {
                    return (
                        <div key={index} className="list">
                            <p>{list.name}</p>
                            <p>{list.surname}</p>
                            <p>{list.dropDown}</p>
                            <div>
                           <Link to="/jobform"> <button className="button-redirect">Advertise</button></Link> or
                          <Link to="/joblist"> <button className="button-redirect">Seek</button></Link>
                           <hr></hr>
                           </div>
                        </div>

                    )
                })}</ul>
            </div>
        </div>
    )
}
