import React from 'react';
import { Link } from 'react-router-dom'

function JobApplication() {
    return (
        <div>
            <p> Here's your selected job vacancy</p>
         <Link to="/"> <button  className="close">Close</button> </Link>
        </div>
    )
}

export default JobApplication
