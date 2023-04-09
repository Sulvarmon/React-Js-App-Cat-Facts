import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column gap-2 p-2 vh-100'>
            <div className='text-white h2' style={{ letterSpacing: "10px" }}>Page Does Not Exist</div>
            <div className='p-2 wf user-select-none bbt rounded'> <Link to='/' className='text-white tuo hl'>Go Back</Link></div>


        </div>
    );
}
export default NotFound