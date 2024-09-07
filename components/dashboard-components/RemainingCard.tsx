'use client'

import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';

interface Props {
    title: string;
    percentage: number;
    amountlow: string;
    amountHigh: string;
}

const RemainingCard: React.FC<Props> = ({ title, percentage, amountlow, amountHigh }) => {
    const [color, setColor] = useState<string>('#27A468');

    useEffect(() => {
        if (percentage < 50) {
            setColor('#27A468');
        } else if (percentage < 75) {
            setColor('#F2A735');
        } else {
            setColor('#E53761');
        }
    }, [percentage]);

    return (
        <div className='border border-gray-200 rounded-lg flex flex-col items-center justify-center p-4 gap-4 w-[30%]'>
            <small className='font-semibold'>{title}</small>
            <Progress percent={percentage} type="circle" strokeColor={color} strokeWidth={8} width={160}/>
            <div className='w-full flex flex-row items-center justify-between'>
                <small className='text-gray-500'>{amountlow}</small>
                <small className='text-gray-500'>{amountHigh}</small>
            </div>
        </div>
    );
}

export default RemainingCard;
