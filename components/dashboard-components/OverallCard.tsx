import React from 'react'
import Image from 'next/image'


interface Props {
    src:any,
    alt:string,
    title:string,
    subtitle:string
}

const OverallCard:React.FC<Props> = ({src, alt,title,subtitle}) => {
  return (
    <div className='border border-gray-200 rounded-lg p-4 flex items-start gap-4 flex-col w-max'>
        <Image src={src}  alt={alt} width={65} height={65}/>
        <div className='pr-20 flex flex-col items-start justify-center'>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <h3 className='text-sm text-gray-500'>{subtitle}</h3>
        </div>
    </div>
  )
}

export default OverallCard