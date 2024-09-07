import DatePickerComp from '@/components/dashboard-components/DatePickerComp'
import OverallCard from '@/components/dashboard-components/OverallCard'
import React from 'react'
import leafeg from '@/public/leafeg.png';
import calenderg from '@/public/calg.png';
import moneyg from '@/public/moneyg.png';
import GradesCard from '@/components/dashboard-components/GradesCard';
import RemainingCard from '@/components/dashboard-components/RemainingCard';
import PersonalChart from '@/components/dashboard-components/PersonalChart';

const page = ({ params }: any) => {
  return (
    <section className='px-48 py-20 flex flex-col gap-5'>
      <div>Hey there! Welcome back,  {params.id}</div>
      <DatePickerComp />
      <div className='w-min flex flex-col gap-6'>
        <div className='flex flex-row gap-6'>
          <OverallCard src={leafeg} alt={'Total net weight'} title={'657 Kg'} subtitle={'Total net weight'} />
          <OverallCard src={calenderg} alt={'Days cur. month'} title={'7 Days'} subtitle={'Days cur. month'} />
          <OverallCard src={moneyg} alt={'paid'} title={'131,555 LKR'} subtitle={'Paid'} />
        </div>
        <div className=' w-full  rounded-lg'>
          <GradesCard />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <RemainingCard title={'Advances'} percentage={25} amountlow={'2,500 LKR'} amountHigh={'10,000 LKR'} />
          <RemainingCard title={'Fertilizers'} percentage={79} amountlow={'15,500 LKR'} amountHigh={'20,000 LKR'} />
          <RemainingCard title={'Tea Packs'} percentage={52} amountlow={'1,500 LKR'} amountHigh={'1,600 LKR'} />
        </div>
        <div className='border'>
          <PersonalChart />
        </div>
      </div>

    </section>
  )
}

export default page