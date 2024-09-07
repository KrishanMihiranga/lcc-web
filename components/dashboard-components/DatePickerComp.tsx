'use client'

import React from 'react'
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const DatePickerComp: React.FC = () => {
    return (
        <Space direction="vertical" size={12}>
            <RangePicker />
        </Space>
    )
}

export default DatePickerComp