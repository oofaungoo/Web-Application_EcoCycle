import React from 'react';
import { Link } from 'react-router-dom';
import HomeMenu from './assets/HomeMenu';
import profileImg from '../../images/profile.png';
import Logo from '../../components/logo/Logo';

const Home = () => {

    {/* ตรงนี้รอ deploy จริง ๆ ต้องเชื่อม API database ตอนนี้ทำแค่ demo ไปก่อน */ }

    const demo_user = {
        fname: "ผมชื่ออู๊ดฮะ เออแมนดี",
        custname: "SCIeco บางซื่อ",
        custlocation: "SCIeco บางซื่อ",
        point: 200,
        bank: "ธนาคารแห่งชาติจีน",
        bank_no: "1234567890",
        phone_no: "0812345678"
    };

    return (
        <div className="container">

            <div className='flex flex-column'>
                <Logo />
                <div className="fs-13 text-grey">รีไซเคิลวันนี้ เพื่ออนาคตที่ยั่งยืน</div>
                <img
                    className="avatar"
                    src={profileImg}
                    style={{ margin: "20px 0 10px 0" }}
                />
                <div>สวัสดี! คุณ {demo_user.fname}</div>
                <div>บริษัท: {demo_user.custname}</div>
                <div>คะแนนสะสมปัจจุบัน: {demo_user.point}</div>
            </div>

            <HomeMenu />

        </div >
    );
};

export default Home;