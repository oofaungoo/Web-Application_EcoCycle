import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <div className='text-center footer fs-13 text-grey'>
                Copyright© 2024 เฟื่อง & บอม (EIP2024 internship)
            </div>
        </div>
    );
};

export default MainLayout;
