import './Btnreturn.css'
import React from 'react';
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

const Btnreturn = () => {
    return (
        <div>
            <Link to="/home" className='btn-return'>
                <HiChevronLeft />ย้อนกลับ
            </Link>
        </div>
    )
}

export default Btnreturn;