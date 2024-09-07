import React from 'react';
import { ClockIcon } from '@heroicons/react/16/solid'
import { FaMoneyBill } from 'react-icons/fa'

interface Props{
    grade: string,
    price: number,
    color: string,
    clockCount: number,
    moneyCount: number,
}

const GradeCard:React.FC<Props> = ({ grade, price, color, clockCount, moneyCount }) => {
    return (
        <div className='border border-gray-200 rounded-lg p-6 flex items-start gap-3 flex-col w-max'>
            <div className='flex flex-row justify-between w-full gap-6'>
                <h1 className='text-lg font-semibold'>{grade}</h1>
                <h1 className='text-lg font-semibold text-gray-400'>{price} LKR</h1>
            </div>
            <span className={`px-2 py-1 rounded-lg text-white text-xs bg-${color}-500`}>{grade}</span>
            <div className='flex flex-row gap-1'>
                {[...Array(clockCount)].map((_, i) => (
                    <ClockIcon key={i} width={20} height={20} color='#0080F6' />
                ))}
            </div>
            <div className='flex flex-row gap-1'>
                {[...Array(moneyCount)].map((_, i) => (
                    <FaMoneyBill key={i} size={20} color='#04773B' />
                ))}
            </div>
        </div>
    );
}

export default GradeCard;