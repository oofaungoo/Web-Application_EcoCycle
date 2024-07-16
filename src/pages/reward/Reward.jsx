import React, { useState, useEffect } from 'react';
import './Reward.css';
import Btnreturn from '../../components/btnreturn/Btnreturn.jsx';
import rewardImg from '../../images/reward.png';
import coinIcon from '../../images/point.png';
import RewardItem from './assets/RewardItem.jsx';

const Reward = () => {
    const [reward, setReward] = useState([]);
    const [users, setUsers] = useState([]);

    const rewardList = [
        { title: 'แก้วเก็บความเย็น', catalog: 'ของที่ระลึก', point: '600', desc: 'ก็เอาไว้เก็บความเย็น แค่นั้น' },
        { title: 'ตุ๊กตา Mr. Burny', catalog: 'ของที่ระลึก', point: '1200', desc: 'ตุ๊กตาน่ารัก เอาไว้เช็ดพื้นแทนผ้า' },
        { title: 'McDonold', catalog: 'อาหาร', point: '600', desc: 'ส่วนลดเบอร์เกอร์ปลา 12 บาท จาก 58 บาท เหลือเพียง 46 บาท!' }
    ];

    const demo_user = {
        fname: "ผมชื่ออู๊ดฮะ เออแมนดี",
        custname: "SCIeco บางซื่อ",
        custlocation: "SCIeco บางซื่อ",
        point: 750,
        bank: "ธนาคารแห่งชาติจีน",
        bank_no: "1234567890",
        phone_no: "0812345678"
    };

    useEffect(() => {
        setReward(rewardList);
        setUsers([demo_user]);
    }, []);

    const handleRedeem = (item) => {
        console.log(`Redeeming reward: ${item.title}`);
        // Add your redeem logic here
    };

    return (
        <div className="container">
            <Btnreturn />

            {users.length > 0 && (
                <div className="points-section">
                    <span className="text-cyan fs-36">{users[0].point}</span>
                    <span className="points-label">คะแนนสะสม</span>
                </div>
            )}

            <nav className="category-nav">
                <div className="category-item">All</div>
                <div className="category-item">Souvenir</div>
                <div className="category-item">Health</div>
                <div className="category-item">Food & Drinks</div>
            </nav>

            <ul className="reward-list">
                {reward.map((item, index) => (
                    <RewardItem
                        key={index}
                        item={item}
                        handleRedeem={handleRedeem}
                        rewardImg={rewardImg}
                        coinIcon={coinIcon}
                        userPoints={users[0]?.point || 0} // Pass the user's points
                    />
                ))}
            </ul>
        </div>
    );
};

export default Reward;