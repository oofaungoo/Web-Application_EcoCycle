import React, { useState, useEffect } from 'react';
import './PriceCheck.css';
import Btnreturn from '../../components/btnreturn/Btnreturn';
import Noti from './assets/Noti';
import wasteImg from '../../images/waste.png';

const PriceCheck = () => {
    const [items, setItems] = useState([]);
    const dateData = [{ date: '9 กรกฎาคม 2567' }];

    useEffect(() => {
        const itemList = [
            { name: 'ขวดน้ำดื่มใส [ไม่แยกฉลาก]', price: '8.00', img: 'product.jpg' },
            { name: 'ขวดน้ำดื่มใส [แยกฉลาก]', price: '13.00', img: 'product.jpg' },
            { name: 'ขวดน้ำดื่มฟ้า [แยกฉลาก]', price: '10.00', img: 'product.jpg' },
            { name: 'ขวดนมขาวขุ่น', price: '11.00', img: 'product.jpg' },
            { name: 'ขวดพลาสติกอื่น ๆ', price: '2.00', img: 'product.jpg' },
            { name: 'กระดาษลัง', price: '3.50', img: 'product.jpg' },
            { name: 'กระดาษ ขาว-ดำ', price: '5.00', img: 'product.jpg' },
            { name: 'กระดาษสี', price: '2.00', img: 'product.jpg' },
            { name: 'เหล็กกล่อง/เหล็กเส้น', price: '5.00', img: 'product.jpg' },
        ];
        setItems(itemList);
    }, []);

    return (
        <div className="container">
            <Btnreturn />

            <div className="text-center text-mint fs-22 fw-5">ราคารับซื้อ (Purchase Price)</div>

            <Noti />

            <div className="text-center fs-15 fw-5 text-cyan">อัปเดตราคาล่าสุด: {dateData[0].date}</div>

            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <img src={wasteImg} alt={item.name} className="item-image" />
                        <div className="item-info">
                            <span>{item.name}</span>
                            <span className="text-green">{item.price} บาท</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PriceCheck;
