import React from 'react';
import GradeCard from './GradeCard';

const gradesData = [
    { grade: 'Grade A', price: 210, color: 'green', clockCount: 1, moneyCount: 3 },
    { grade: 'Grade B', price: 200, color: 'blue', clockCount: 2, moneyCount: 2 },
    { grade: 'Grade C', price: 195 , color: 'yellow', clockCount: 3, moneyCount: 1 },
];

const GradesCard = () => {
    return (
        <div className='flex flex-wrap items-start gap-8 justify-center'>
            {gradesData.map((item, index) => (
                <GradeCard
                    key={index}
                    grade={item.grade}
                    price={item.price}
                    color={item.color}
                    clockCount={item.clockCount}
                    moneyCount={item.moneyCount}
                />
            ))}
        </div>
    );
}

export default GradesCard;
