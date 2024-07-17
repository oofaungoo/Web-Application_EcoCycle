import React from "react";

const Form_date = ({ dropOffDate, handleDropOffDateChange }) => {
    return (
        <div className="form-group">
            <div className='fs-15 fw-5 text-mint'>Drop-off Date | เลือกวันที่ต้องการให้รถไปรับ</div>
            <input
                type="date"
                value={dropOffDate}
                onChange={handleDropOffDateChange}
                required
            />
        </div>
    )
}

export default Form_date;