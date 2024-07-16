import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout, HiPencilAlt, HiOutlineStar, HiOutlineDocumentSearch } from "react-icons/hi";

const HomeMenu = () => {
    return (
        <div className="flex flex-column fs-15 fw-3">
            <Link to="/home/form" className="btn btn-blue">
                <HiPencilAlt /> ทำรายการ
            </Link>
            <Link to="/home/reward" className="btn btn-blue">
                <HiOutlineStar /> Redeem rewards

            </Link>
            <Link to="/home/pricecheck" className="btn btn-blue">
                <HiOutlineDocumentSearch /> ตรวจสอบราคารับซื้อประจำวัน
            </Link>
            <Link to="/" className="btn btn-red">
                <HiOutlineLogout /> ออกจากระบบ
            </Link>
        </div >
    )
}

export default HomeMenu;