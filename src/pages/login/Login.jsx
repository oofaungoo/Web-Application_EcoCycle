import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

const Login = () => {
    return (
        <div className="container">
            <div className="flex flex-column">
                <Logo />
                <div className="fs-13 text-grey">รีไซเคิลวันนี้ เพื่ออนาคตที่ยั่งยืน</div>
            </div>

            <div className="flex flex-column">
                <div>
                    <input
                        id="tel"
                        type="tel"
                        placeholder="เบอร์โทรศัพท์มือถือ"
                        style={{ margin: "40px 0 26px 0" }}
                        required
                    />
                </div>

                <div>
                    <input
                        id="password"
                        type="password"
                        placeholder="รหัสผ่าน"
                        required
                    />
                </div>

                <div className="fs-13">
                    <span className="text-grey">ลืมรหัสผ่านหรอ </span>
                    <Link to="/" className="text-blue-logo">ลืมรหัสผ่าน?</Link>
                </div>

                <Link to="/home" className="btn btn-blue fs-16 fw-4" style={{ margin: "30px 0 16px 0" }}>
                    เข้าสู่ระบบ
                </Link>
            </div>

            <div className="fs-13">
                <div>
                    <span className="text-grey">ยังไม่ได้เป็นสมาชิกกับเราหรอ? </span>
                </div>
                <Link to="/" className="text-blue-logo">ลงทะเบียนผู้ใช้ใหม่</Link>
            </div>
        </div>
    );
};

export default Login;
